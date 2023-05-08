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
}

const HeroHeader = ({ carId, name, vin, maker, lineup, owner, preview }: Props) => {
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
        src={`${process.env.NEXT_PUBLIC_CDN_URL}/mycar/${preview ? 'sample' : carId}.jpg`}
        alt=''
        fill
        className={styles.hero}
      />
      <div className={styles.heroPlaceholder}>
        <Image src={`${process.env.NEXT_PUBLIC_CDN_URL}/mycar/sample.jpg`} fill alt='' />
        <p>
          이미지는 1600x900px 사이즈로 준비해서 제게 주세요.
          <br />
          Next.js + appDir api에서 S3 SDK에 오류가 있어 제가 직접 올려야합니다 ㅠㅠ
        </p>
      </div>
    </div>
  );
};

export default HeroHeader;
