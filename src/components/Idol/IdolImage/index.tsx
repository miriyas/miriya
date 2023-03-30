import ImageSprite from '@/components/ImageSprite';
import styles from './IdolImage.module.scss';

interface Props {
  i: number;
  year: number;
  yearLength: number;
}

const IdolImage = ({ i, year, yearLength }: Props) => {
  return (
    <ImageSprite
      i={i}
      width={100}
      height={100}
      length={yearLength}
      url={`idols/sprites/${String(year)}.png`}
      className={styles.idolImage}
    />
  );
};

export default IdolImage;
