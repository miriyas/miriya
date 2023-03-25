import Image from 'next/image';

import { CameraType } from '@/types/cameras.d';
import { cameraId } from './utils';

import styles from './Camera.module.scss';

interface Props {
  camera: CameraType;
}

const DataImage = (props: Props) => {
  const { camera } = props;
  const { maker, name } = camera;

  const id = cameraId(maker, name);
  const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/cameras/${maker.toLowerCase()}/${id}.jpg`;

  return (
    <div className={styles.cameraImg}>
      <Image
        src={imageUrl}
        alt={name}
        width={140}
        height={140}
        blurDataURL='/images/cameras/placeholder.png'
        placeholder='blur'
      />
      <div className={styles.shadow} />
    </div>
  );
};

export default DataImage;
