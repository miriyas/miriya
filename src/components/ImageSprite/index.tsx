import cx from 'clsx';
import Image from 'next/image';

import styles from './ImageSprite.module.scss';

interface Props {
  url: string;
  i: number;
  length: number;
  width: number;
  height: number;
  className?: string;
}

const ImageSprite = ({ i, url, length, width, height, className }: Props) => {
  return (
    <div className={cx(styles.imageSprite, className)}>
      <Image
        src={`/images/${url}`}
        width={width}
        height={length * height}
        alt=''
        style={{
          top: `-${i * height}px`,
        }}
      />
    </div>
  );
};

export default ImageSprite;
