import cx from 'clsx';

import { SENSOR_SIZE, SensorSizeTypes, CameraType } from '@/types/cameras.d';

import styles from './Table.module.scss';

const prettySensorSize = (sensorSize?: SensorSizeTypes) => {
  if (!sensorSize) return <p className='grayBg'>APS-C</p>;
  return {
    [SENSOR_SIZE.FF]: <p className={cx(styles.sensor, 'redBg')}>FullFrame</p>,
    [SENSOR_SIZE.APSH]: <p className={cx(styles.sensor, 'orangeBg')}>APS-H</p>,
    [SENSOR_SIZE.APSC]: <p className={cx(styles.sensor, 'grayBg')}>APS-Cx</p>,
    [SENSOR_SIZE.C19]: <p className={cx(styles.sensor, 'yellowBg')}>1.9crop</p>,
    [SENSOR_SIZE.C26]: <p className={cx(styles.sensor, 'yellowBg')}>2.6crop</p>,
    [SENSOR_SIZE.I23]: <p className={cx(styles.sensor, 'yellowBg')}>2/3&quot;</p>,
  }[sensorSize];
};

interface Props {
  camera: CameraType;
}

const DataSensor = (props: Props) => {
  const { camera } = props;
  const { sensor } = camera;

  if (!sensor) return null;

  const sensorData = [sensor.name, sensor.pixelsFamiliar, sensor.type].filter((item) => !!item).join(' ');
  const isoData = sensor?.isoMin ? `ISO${sensor?.isoMin}-${sensor?.isoMax}` : '';

  return (
    <>
      <tr>
        <th>Sensor</th>
        <td className={styles.dataSensor}>
          {prettySensorSize(sensor.size)}
          {sensorData}
        </td>
      </tr>
      {sensor.engine && (
        <tr>
          <th>Engine</th>
          <td>{sensor.engine}</td>
        </tr>
      )}
      <tr>
        <th>ISO</th>
        <td>{isoData}</td>
      </tr>
    </>
  );
};

export default DataSensor;
