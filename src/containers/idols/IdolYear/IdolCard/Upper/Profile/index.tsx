import Image from 'next/image';

import { Idol } from '@/types/idols.d';
import { prettyCategory } from '@/utils/idols';
import { getCDNImage, imageLoaderDo2Ik } from '@/utils/image';

import { IconComment } from 'public/svgs';
import styles from './index.module.scss';

interface Props {
  idol: Idol;
  onClickUpper: () => void;
}

const Profile = ({ idol, onClickUpper }: Props) => {
  const { category, comments, name, debutYear, endYear, id } = idol;
  const imageUrl = getCDNImage(`idols/${id}.jpg`);

  return (
    <button type='button' onClick={onClickUpper} className={styles.profile} aria-label='show more'>
      <Image
        src={imageUrl}
        alt={name}
        width={140}
        height={220}
        className={styles.profileImg}
        loader={imageLoaderDo2Ik}
      />
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.category}>{prettyCategory(category)}</p>
        <p className={styles.years}>{`${debutYear} ~ ${endYear ?? ''}`}</p>
        {comments.length > 0 && (
          <div className={styles.withComment}>
            <IconComment />
            <span>{comments.length}</span>
          </div>
        )}
      </div>
    </button>
  );
};

export default Profile;
