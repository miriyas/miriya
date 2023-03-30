import { CameraType } from '@/types/cameras.d';

import DataRefs from './DataRefs';
import DataSensor from './DataSensor';
import DataViewFinder from './DataViewFinder';
import DataSiblings from './DataSiblings';
import DataShutter from './DataShutter';
import DataDisplay from './DataDisplay';
import styles from './Table.module.scss';

interface Props {
  camera: CameraType;
}

const Data = (props: Props) => {
  const { camera } = props;
  const { name, maker2, name2, otherNames, metering } = camera;

  const name2data = maker2 ? `${maker2} ${name2}` : '';
  const nameOtherData = otherNames?.join(' / ');
  const nameLine = [name, name2data, nameOtherData].filter((item) => !!item).join(' / ');

  const meteringData = metering ? [metering.engine, metering.desc].filter((item) => !!item).join('/') : '?';

  return (
    <table className={styles.dataTable}>
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
  );
};

export default Data;
