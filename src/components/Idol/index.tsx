import Image from 'next/image';

import { IIdol, TCategory } from '@/types';

import { IconSound } from '@/assets/svgs';
import styles from './Idol.module.scss';
import { useMemo } from 'react';

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
}

const Idol = (props: Props) => {
  const {
    idol: { category, name, youtube, debutYear, endYear },
  } = props;

  const profileUrl = useMemo(() => `/images/idols/${filterIdolName(name)}.jpg`, [name]);

  const onClickUpper = () => {
    console.log('click');
  };

  return (
    <li className={styles.idol}>
      <button type='button' className={styles.upper} onClick={onClickUpper}>
        {youtube && youtube.url !== '' && <IconSound className={styles.withSound} />}
        <div className={styles.profileImg}>
          <Image src={profileUrl} alt={name} width={100} height={100} />
        </div>
        <p className={styles.name}>{name}</p>
        <p className={styles.category}>{prettyCategory(category)}</p>
        <p className={styles.years}>{`${debutYear} ~ ${endYear ?? '활동중'}`}</p>
      </button>
    </li>
  );
};

export default Idol;
