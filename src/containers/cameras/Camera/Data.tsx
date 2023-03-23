import Image from 'next/image';

import { CameraType } from '@/types/cameras.d';
import { cameraId } from './utils';

import Badges from './Badges';
import DataRefs from './DataRefs';
import DataSensor from './DataSensor';
import DataViewFinder from './DataViewFinder';
import DataSiblings from './DataSiblings';
import DataShutter from './DataShutter';
import DataDisplay from './DataDisplay';
import styles from './Camera.module.scss';

interface Props {
  camera: CameraType;
}

const Data = (props: Props) => {
  const { camera } = props;
  const { desc, maker, name, maker2, name2, otherNames, metering } = camera;

  const id = cameraId(maker, name);

  const name2data = maker2 ? `${maker2} ${name2}` : '';
  const nameOtherData = otherNames?.join(' / ');
  const nameLine = [name, name2data, nameOtherData].filter((item) => !!item).join(' / ');

  const meteringData = metering ? [metering.engine, metering.desc].filter((item) => !!item).join('/') : '?';

  const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/cameras/${maker.toLowerCase()}/${id}.jpg`;

  return (
    <>
      <Badges camera={camera} />
      <div className={styles.cameraImg}>
        <Image src={imageUrl} alt={name} width={140} height={140} />
        <div className={styles.shadow} />
      </div>
      <div className={styles.top}>
        <p className={styles.name}>{nameLine}</p>
        {desc && <p className={styles.desc}>{desc}</p>}
      </div>
      <table>
        <tbody>
          <DataSensor camera={camera} />
          <DataShutter camera={camera} />
          <tr>
            <th>Metering</th>
            <td>{meteringData}</td>
          </tr>
          <DataViewFinder camera={camera} />
          <DataDisplay camera={camera} />
          <DataRefs nameLine={nameLine} camera={camera} />
          <DataSiblings camera={camera} />
        </tbody>
      </table>
    </>
  );
};

export default Data;
