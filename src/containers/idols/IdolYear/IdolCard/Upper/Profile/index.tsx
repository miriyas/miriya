import Image from 'next/image';
import dynamic from 'next/dynamic';

import { Idol } from '@/types/idols';
import { prettyCategory } from '@/utils/idols';
import { getCDNImage, imageLoaderDo2Ik } from '@/utils/image';
import IDOL_COLORS from '@/containers/idols/idolColors.json';

import { IconComment } from 'public/svgs';
import styles from './index.module.scss';

const LikeButton = dynamic(() => import('./LikeButton'), { ssr: false });

// Average color of each card image (scripts/idol-colors.mjs). The card shows it until the image loads.
const colors: Record<string, string> = IDOL_COLORS;

interface Props {
  idol: Idol;
  onClickUpper: () => void;
}

const Profile = ({ idol, onClickUpper }: Props) => {
  const { category, comments, name, debutYear, endYear, id } = idol;
  const imageUrl = getCDNImage(`idols/${id}.jpg`);

  return (
    <div
      onClick={onClickUpper}
      className={styles.profile}
      style={{ backgroundColor: colors[id] ?? 'var(--color-gray-d)' }}
      aria-label='show more'
      role='button'
      tabIndex={0}
    >
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
        <div className={styles.withLike}>
          <LikeButton targetId={id} />
        </div>
        {comments.length > 0 && (
          <div className={styles.withComment}>
            <IconComment />
            <span>{comments.length}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
