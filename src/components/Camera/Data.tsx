import { CameraType } from '@/types/cameras.d';

import Badges from './Badges';
import DataImage from './DataImage';
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
  const { desc, name, maker2, name2, otherNames, metering } = camera;

  const name2data = maker2 ? `${maker2} ${name2}` : '';
  const nameOtherData = otherNames?.join(' / ');
  const nameLine = [name, name2data, nameOtherData].filter((item) => !!item).join(' / ');

  const meteringData = metering ? [metering.engine, metering.desc].filter((item) => !!item).join('/') : '?';

  return (
    <div className={styles.dataInternal}>
      <Badges camera={camera} />
      <DataImage camera={camera} />
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
    </div>
  );
};

export default Data;
