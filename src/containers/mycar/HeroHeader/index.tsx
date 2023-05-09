'use client';

import cx from 'clsx';
import Image from 'next/image';

import styles from './index.module.scss';

interface Props {
  carId?: string;
  name: string;
  vin: string;
  maker: string;
  lineup: string;
  owner: string;
  preview?: boolean;
  previewUrl?: string;
}

const HeroHeader = ({ carId, name, vin, maker, lineup, owner, preview, previewUrl }: Props) => {
  return (
    <div className={cx(styles.heroHeader, { [styles.preview]: preview })}>
      <div className={styles.thisIsPreview}>미리보기</div>
      <div className={styles.texts}>
        <p className={styles.title}>{name}</p>
        <p className={styles.line}>
          {maker} {lineup}
        </p>
        <p className={styles.vin}>{vin}</p>
        <p className={styles.owner}>{owner}</p>
      </div>
      <Image
        src={
          previewUrl ||
          `${process.env.NEXT_PUBLIC_CDN_URL}/mycar/${preview ? 'sample' : carId}.jpg?hash=${new Date().getTime()}`
        }
        alt=''
        fill
        className={styles.hero}
        unoptimized
      />
    </div>
  );
};

export default HeroHeader;
