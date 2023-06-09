import Image from 'next/image';

import { CameraCore } from '@/types/cameras.d';
import { cameraId } from '@/utils/cameras';
import { imageLoaderDo2Ik } from '@/utils/image';

import styles from './Image.module.scss';

interface Props {
  camera: CameraCore;
}

const DataImage = (props: Props) => {
  const { camera } = props;
  const { maker, name } = camera;

  const id = cameraId(maker, name);
  const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/cameras/${maker.toLowerCase()}/${id}.jpg`;

  return (
    <div className={styles.cameraImage}>
      <Image
        src={imageUrl}
        alt={name}
        width={140}
        height={140}
        blurDataURL='/images/cameras/placeholder.png'
        loader={imageLoaderDo2Ik}
        placeholder='blur'
      />
      <div className={styles.shadow} />
    </div>
  );
};

export default DataImage;
