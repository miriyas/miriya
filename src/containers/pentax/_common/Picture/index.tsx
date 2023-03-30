'use client';

import Image from 'next/image';

import { PENTAX_DSLRS } from '@/constants/pentaxes';
import { cameraId } from '@/utils/cameras';

import styles from './Picture.module.scss';

interface Props {
  selectedCameraName: string;
  baseUrl: 'dslr' | 'slr';
}

const Picture = ({ selectedCameraName, baseUrl }: Props) => {
  const camera = PENTAX_DSLRS.find((c) => c.name === selectedCameraName) || PENTAX_DSLRS[0];

  const id = cameraId('pentax', camera.name);
  const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/pentaxes/${baseUrl}/${id}.jpg`;

  return (
    <div className={styles.pictureWrapper}>
      <div className={styles.picture}>
        <Image
          src={imageUrl}
          alt={camera.name}
          width={280}
          height={280}
          blurDataURL='/images/cameras/placeholder.png'
          placeholder='blur'
        />
      </div>
      <p className={styles.name}>{camera.name}</p>
    </div>
  );
};

export default Picture;
