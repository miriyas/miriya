/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import styles from './ImageExpandable.module.scss';

interface Props {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  ignoreDimension?: boolean;
}

/** 순수 CSS로 만든 간단한 확대/축소 기능 */
const ImageExpandable = ({ src, alt, width, height, ignoreDimension }: Props) => {
  return (
    <details className={styles.imageExpandable}>
      <summary>
        {ignoreDimension ? (
          <img src={src} alt={alt ?? ''} className={styles.summaryImg} />
        ) : (
          <Image src={src} alt={alt ?? ''} width={width} height={height} className={styles.summaryImg} />
        )}
      </summary>
      {ignoreDimension ? (
        <img src={src} alt={alt ?? ''} className={styles.detailsImg} />
      ) : (
        <Image src={src} alt={alt ?? ''} width={width} height={height} className={styles.detailsImg} unoptimized />
      )}
    </details>
  );
};

export default ImageExpandable;
