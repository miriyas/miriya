import { FBIdolType } from '@/types/idols.d';
import { prettyCategory } from '@/utils/idols';

import ImageSprite from '@/components/ImageSprite';
import styles from './index.module.scss';

interface Props {
  i: number;
  yearLength: number;

  idol: FBIdolType;
  onClickUpper: () => void;
}

const Profile = ({ i, yearLength, idol, onClickUpper }: Props) => {
  const { category, name, debutYear, endYear } = idol;

  return (
    <button type='button' onClick={onClickUpper} className={styles.profile} aria-label='show more'>
      <div className={styles.profileImg}>
        <ImageSprite
          i={i}
          width={100}
          height={100}
          length={yearLength}
          url={`idols/sprites/${String(debutYear)}.png`}
          className={styles.profileSprite}
        />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.category}>{prettyCategory(category)}</p>
      <p className={styles.years}>{`${debutYear} ~ ${endYear ?? '활동중'}`}</p>
    </button>
  );
};

export default Profile;
