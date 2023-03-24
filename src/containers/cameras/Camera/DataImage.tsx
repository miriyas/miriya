import Image from 'next/image';
// import { useQuery } from '@tanstack/react-query';

import { CameraType } from '@/types/cameras.d';
import { cameraId } from './utils';
// import { getCameraBlurImageApi } from '@/services/cameras';

import styles from './Camera.module.scss';

interface Props {
  camera: CameraType;
}

const DataImage = (props: Props) => {
  const { camera } = props;
  const { maker, name } = camera;

  const id = cameraId(maker, name);
  const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/cameras/${maker.toLowerCase()}/${id}.jpg`;

  // const { data } = useQuery(
  //   ['getCameraBlurImageApi', maker.toLowerCase(), id],
  //   () => getCameraBlurImageApi(maker.toLowerCase(), id).then((res) => res.json()),
  //   {
  //     cacheTime: 6 * 1000,
  //     refetchOnMount: false,
  //     retry: false,
  //   },
  // );

  // console.log(data, id, maker, 222, imageUrl);

  return (
    <div className={styles.cameraImg}>
      <Image src={imageUrl} alt={name} width={140} height={140} />
      {/* {data && <Image src={imageUrl} alt={name} width={140} height={140} blurDataURL={data} placeholder='blur' />} */}
      <div className={styles.shadow} />
    </div>
  );
};

export default DataImage;
