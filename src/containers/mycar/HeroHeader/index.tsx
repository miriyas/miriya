'use client';

import cx from 'clsx';
import Image from 'next/image';

import { getCDNImage, imageLoaderDo2Ik } from '@/utils/image';

import styles from './index.module.scss';

interface Props {
  imageUrl?: string;
  name: string;
  vin: string;
  maker: string;
  lineup: string;
  owner: string;
  preview?: boolean;
}

const HeroHeader = ({ imageUrl, name, vin, maker, lineup, owner, preview }: Props) => {
  const sampleUrl = getCDNImage('mycar/sample.jpg');
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
      <Image src={imageUrl ?? sampleUrl} alt='' fill className={styles.hero} loader={imageLoaderDo2Ik} priority />
    </div>
  );
};

export default HeroHeader;
