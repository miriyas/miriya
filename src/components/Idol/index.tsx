import { useMemo, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import Image from 'next/image';
import cx from 'classnames';

import { IIdol, TCategory } from '@/types';

import { IconSound } from '@/assets/svgs';
import styles from './Idol.module.scss';
import Youtube from '@/components/Idol/Youtube';

const filterIdolName = (name: string) => {
  return name.replace(/[^a-z|A-Z|0-9|ㄱ-ㅎ|가-힣|.,-|\&]/g, '');
};

const prettyCategory = (category: TCategory) => {
  return {
    'mixed-group': '혼성그룹',
    'girl-group': '여성그룹',
    'boy-group': '남성그룹',
    'girl-solo': '여성솔로',
    'boy-solo': '남성솔로',
  }[category];
};

interface Props {
  idol: IIdol;
  sort: () => void;
}

const Idol = (props: Props) => {
  const { idol, sort } = props;
  const { category, name, youtube, debutYear, endYear } = idol;

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
  };

  const profileUrl = useMemo(() => `/images/idols/${filterIdolName(name)}.jpg`, [name]);

  return (
    <li ref={idolRef} className={cx(styles.idol, `grid-item-${debutYear}`, { [styles.opened]: opened })}>
      <button type='button' className={styles.upper} onClick={onClickUpper}>
        {youtube && youtube.url !== '' && <IconSound className={styles.withSound} />}
        <div className={styles.profileImg}>
          <Image src={profileUrl} alt={name} width={100} height={100} />
        </div>
        <p className={styles.name}>{name}</p>
        <p className={styles.category}>{prettyCategory(category)}</p>
        <p className={styles.years}>{`${debutYear} ~ ${endYear ?? '활동중'}`}</p>
      </button>
      {opened && <div className={styles.lower}>{hasYoutube && <Youtube youtube={youtube} />}</div>}
    </li>
  );
};

export default Idol;
