import Image from 'next/image';

import styles from './ImageExpandable.module.scss';

interface Props {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

/** 순수 CSS로 만든 간단한 확대/축소 기능 */
const ImageExpandable = ({ src, alt, width, height }: Props) => {
  return (
    <details className={styles.imageExpandable}>
      <summary>
        <Image src={src} alt={alt ?? ''} width={width} height={height} className={styles.summaryImg} />
      </summary>
      <Image src={src} alt={alt ?? ''} width={width} height={height} className={styles.detailsImg} unoptimized />
    </details>
  );
};

export default ImageExpandable;
