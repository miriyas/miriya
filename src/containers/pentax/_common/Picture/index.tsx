'use client';

import Image from 'next/image';

import { cameraId } from '@/utils/cameras';
import { PentaxSlr, PentaxDslr } from '@/types/pentaxes';
import { getCDNImage, imageLoaderDo2Ik } from '@/utils/image';

import styles from './Picture.module.scss';

interface Props {
  selectedCamera?: PentaxSlr | PentaxDslr;
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
  const imageUrl = getCDNImage(`pentaxes/${baseUrl}/${id}.jpg`);

  return (
    <div className={styles.pictureWrapper}>
      <div className={styles.picture}>
        <Image
          src={imageUrl}
          alt={selectedCamera.name}
          width={280}
          height={280}
          blurDataURL='/images/cameras/placeholder.png'
          loader={imageLoaderDo2Ik}
          placeholder='blur'
          priority
        />
      </div>
      <p className={styles.name} title={selectedCamera.id}>
        {selectedCamera.name}
      </p>
    </div>
  );
};

export default Picture;
