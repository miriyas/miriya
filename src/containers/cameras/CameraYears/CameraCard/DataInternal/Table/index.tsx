import { CameraType } from '@/types/cameras.d';

import DataRefs from './DataRefs';
import DataSensor from './DataSensor';
import DataFinder from './DataFinder';
import DataFocus from './DataFocus';
import DataShutter from './DataShutter';
import DataMetering from './DataMetering';
import DataDisplay from './DataDisplay';
import DataVideo from './DataVideo';
import DataEtc from './DataEtc';
import styles from './Table.module.scss';

interface Props {
  camera: CameraType;
}

const Data = (props: Props) => {
  const { camera } = props;
  const { name, maker2, name2, otherNames } = camera;

  const name2data = maker2 ? `${maker2} ${name2}` : '';
  const nameLine = [name, name2data, otherNames].filter((item) => !!item).join(' / ');

  return (
    <table className={styles.dataTable}>
      <tbody>
        <DataSensor camera={camera} />
        <DataShutter camera={camera} />
        <DataFocus camera={camera} />
        <DataMetering camera={camera} />
        <DataFinder camera={camera} />
        <DataDisplay camera={camera} />
        <DataVideo camera={camera} />
        <DataEtc camera={camera} />
        <DataRefs nameLine={nameLine} camera={camera} />
      </tbody>
    </table>
  );
};

export default Data;
