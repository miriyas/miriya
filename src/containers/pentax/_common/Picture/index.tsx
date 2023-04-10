'use client';

import Image from 'next/image';

import { cameraId } from '@/utils/cameras';
import { FBPentaxSlr, FBPentaxDslr } from '@/types/pentaxes';

import styles from './Picture.module.scss';

interface Props {
  selectedCamera?: FBPentaxSlr | FBPentaxDslr;
  baseUrl: 'dslr' | 'slr';
}

const Picture = ({ selectedCamera, baseUrl }: Props) => {
  if (!selectedCamera)
    return (
      <div className={styles.pictureWrapper}>
        <div className={styles.picture} />
      </div>
    );

  const id = cameraId('pentax', selectedCamera.name);
  const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/pentaxes/${baseUrl}/${id}.jpg`;

  return (
    <div className={styles.pictureWrapper}>
      <div className={styles.picture}>
        <Image
          src={imageUrl}
          alt={selectedCamera.name}
          width={280}
          height={280}
          blurDataURL='/images/cameras/placeholder.png'
          placeholder='blur'
        />
      </div>
      <p className={styles.name} title={selectedCamera.id}>
        {selectedCamera.name}
      </p>
    </div>
  );
};

export default Picture;
