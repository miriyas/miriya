import { IdolType } from '@/types/idols.d';
import { prettyCategory } from '@/utils/idols';

import ImageSprite from '@/components/ImageSprite';
import { IconSound } from 'public/svgs';
import styles from './IdolImage.module.scss';

interface Props {
  i: number;
  yearLength: number;

  idol: IdolType;
  onClickUpper: () => void;
}

const IdolImage = ({ i, yearLength, idol, onClickUpper }: Props) => {
  const { category, name, youtube, debutYear, endYear } = idol;

  return (
    <button type='button' onClick={onClickUpper} className={styles.idolImage}>
      {youtube && youtube.url !== '' && <IconSound className={styles.withSound} />}
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

export default IdolImage;
