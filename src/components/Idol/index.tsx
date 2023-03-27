import { MouseEventHandler, useRef } from 'react';
import { useClickAway, useRafState } from 'react-use';
import cx from 'clsx';

import { useGA } from '@/hooks/useGA';
import { IdolType } from '@/types/idols.d';
import { prettyCategory } from '@/utils/idols';
import { IDOL } from '@/constants/ga';

import Youtube from '@/components/Idol/Youtube';
import { IconDescMelon, IconDescNamu, IconDescVibe, IconSound } from '../../../public/images/svgs';
import styles from './Idol.module.scss';
import ImageSprite from '@/components/Idol/ImageSprite';

interface Props {
  idol: IdolType;
  sort: () => void;
  i: number;
  yearLength: number;
}

const Idol = (props: Props) => {
  const { idol, sort, i, yearLength } = props;
  const { category, desc, name, youtube, debutYear, endYear } = idol;

  const { gaEvent } = useGA();
  const idolRef = useRef<HTMLLIElement>(null);
  const [opened, setOpened] = useRafState(false);

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

  return (
    <li
      ref={idolRef}
      className={cx(styles.idol, `grid-item-${debutYear}`, `category-${category}`, { [styles.opened]: opened })}
    >
      <div className={styles.upper}>
        <button type='button' onClick={onClickUpper} className={styles.leftWing}>
          {youtube && youtube.url !== '' && <IconSound className={styles.withSound} />}
          <div className={styles.profileImg}>
            <ImageSprite year={Number(debutYear)} i={i} yearLength={yearLength} />
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
