import Image from 'next/image';

import styles from './ImageSprite.module.scss';

interface Props {
  i: number;
  year: number;
  yearLength: number;
}

const ImageSprite = ({ i, year, yearLength }: Props) => {
  return (
    <div className={styles.imageSprite}>
      <Image
        src={`/images/idols/sprites/${String(year)}.png`}
        width={100}
        height={yearLength * 100}
        alt=''
        style={{
          top: `-${i * 100}px`,
        }}
      />
    </div>
  );
};

export default ImageSprite;
