import { MouseEventHandler, useMemo, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import Image from 'next/image';
import cx from 'clsx';

import { useGA } from '@/hooks/useGA';
import { IdolType } from '@/types/idols.d';
import { prettyCategory } from '@/utils/idols';
import { IDOL } from '@/constants/ga';

import Youtube from '@/components/Idol/Youtube';
import { IconDescMelon, IconDescNamu, IconDescVibe, IconSound } from '../../../public/images/svgs';
import styles from './Idol.module.scss';

const filterIdolName = (name: string) => {
  return name.replace(/[^a-z|A-Z|0-9|ㄱ-ㅎ|가-힣|.,-|&]/g, '');
};

interface Props {
  idol: IdolType;
  sort: () => void;
}

const Idol = (props: Props) => {
  const { idol, sort } = props;
  const { category, desc, name, youtube, debutYear, endYear } = idol;

  const { gaEvent } = useGA();
  const idolRef = useRef<HTMLLIElement>(null);
  const [opened, setOpened] = useState(false);

  const hasYoutube = youtube && youtube.startsAt >= 0 && youtube.url;

  useClickAway(idolRef, () => {
    if (!opened) return;
    setOpened(false);
    sort();
  });

  const onClickUpper = () => {
    if (!hasYoutube) return;
    setOpened(true);
    sort();
    gaEvent(IDOL.IDOL_OPEN, { name });
  };

  const onClickDesc: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const { title: target, href } = e.currentTarget;
    gaEvent(IDOL.IDOL_DESC_CLICK, { name, target });
    window.open(href);
  };

  const profileUrl = useMemo(() => `/images/idols/${filterIdolName(name)}.jpg`, [name]);

  return (
    <li
      ref={idolRef}
      className={cx(styles.idol, `grid-item-${debutYear}`, `category-${category}`, { [styles.opened]: opened })}
    >
      <div className={styles.upper}>
        <button type='button' onClick={onClickUpper} className={styles.leftWing}>
          {youtube && youtube.url !== '' && <IconSound className={styles.withSound} />}
          <div className={styles.profileImg}>
            <Image src={profileUrl} alt={name} width={100} height={100} />
          </div>
          <p className={styles.name}>{name}</p>
          <p className={styles.category}>{prettyCategory(category)}</p>
          <p className={styles.years}>{`${debutYear} ~ ${endYear ?? '활동중'}`}</p>
        </button>
        {opened && desc && (
          <div className={styles.rightWing}>
            {desc.title && <p className={styles.desc}>{desc.title}</p>}
            <div className={styles.outerLinks}>
              {desc.namu && (
                <a href={desc.namu} target='_blank' onClick={onClickDesc} title='나무위키' rel='nofollow'>
                  <IconDescNamu />
                </a>
              )}
              {desc.melon && (
                <a href={desc.melon} target='_blank' onClick={onClickDesc} title='멜론' rel='nofollow'>
                  <IconDescMelon />
                </a>
              )}
              {desc.naver && (
                <a href={desc.naver} target='_blank' onClick={onClickDesc} title='바이브' rel='nofollow'>
                  <IconDescVibe />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      {opened && <div className={styles.lower}>{hasYoutube && <Youtube youtube={youtube} />}</div>}
    </li>
  );
};

export default Idol;
