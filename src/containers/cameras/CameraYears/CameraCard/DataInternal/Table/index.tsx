import { CameraType } from '@/types/cameras.d';

import DataRefs from './DataRefs';
import DataSensor from './DataSensor';
import DataViewFinder from './DataViewFinder';
import DataShutter from './DataShutter';
import DataDisplay from './DataDisplay';
import styles from './Table.module.scss';

interface Props {
  camera: CameraType;
}

const Data = (props: Props) => {
  const { camera } = props;
  const { name, maker2, name2, otherNames, metering, video } = camera;

  const name2data = maker2 ? `${maker2} ${name2}` : '';
  const nameLine = [name, name2data, otherNames].filter((item) => !!item).join(' / ');

  const meteringData = metering ? [metering.engine, metering.desc].filter((item) => !!item).join('/') : '?';

  return (
    <table className={styles.dataTable}>
      <tbody>
        <DataSensor camera={camera} />
        <DataShutter camera={camera} />
        {metering && (
          <tr>
            <th>측광</th>
            <td>{meteringData}</td>
          </tr>
        )}
        <DataViewFinder camera={camera} />
        <DataDisplay camera={camera} />
        {video && (
          <tr>
            <th>비디오</th>
            <td>
              {video.format}, {video.modes}
            </td>
          </tr>
        )}
        <DataRefs nameLine={nameLine} camera={camera} />
      </tbody>
    </table>
  );
};

export default Data;
