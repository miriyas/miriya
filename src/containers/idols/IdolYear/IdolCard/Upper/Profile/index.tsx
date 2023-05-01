import Image from 'next/image';

import { FBIdolType } from '@/types/idols.d';
import { prettyCategory } from '@/utils/idols';

import styles from './index.module.scss';

const filterIdolName = (name: string) => {
  return name.replace(/[^a-z|A-Z|0-9|ㄱ-ㅎ|가-힣|.,-|&]|:/g, '');
};

interface Props {
  idol: FBIdolType;
  onClickUpper: () => void;
}

const Profile = ({ idol, onClickUpper }: Props) => {
  const { category, name, debutYear, endYear } = idol;

  return (
    <button type='button' onClick={onClickUpper} className={styles.profile} aria-label='show more'>
      <Image
        src={`/images/idols/${debutYear}/${filterIdolName(name)}.jpg`}
        alt={name}
        width={140}
        height={220}
        className={styles.profileImg}
      />
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.category}>{prettyCategory(category)}</p>
        <p className={styles.years}>{`${debutYear} ~ ${endYear ?? ''}`}</p>
      </div>
    </button>
  );
};

export default Profile;
