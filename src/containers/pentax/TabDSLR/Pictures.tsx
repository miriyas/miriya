'use client';

import { useAtomValue } from 'jotai';
import Image from 'next/image';

import { PENTAX_DSLRS } from '@/constants/pentaxes';
import { selectedCameraAtom } from './states';

import { cameraId } from '@/components/Camera/utils';
import styles from './Pictures.module.scss';

const Pictures = () => {
  const selectedCameraName = useAtomValue(selectedCameraAtom);

  const camera = PENTAX_DSLRS.find((c) => c.name === selectedCameraName) || PENTAX_DSLRS[0];

  const id = cameraId('pentax', camera.name);
  const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/pentaxes/dslr/${id}.jpg`;

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

export default Pictures;
