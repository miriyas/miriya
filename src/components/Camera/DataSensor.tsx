import { SENSOR_SIZE, SensorSizeTypes, Sensor } from '@/types/cameras.d';

import styles from './Camera.module.scss';

export const prettySensorSize = (sensorSize?: SensorSizeTypes) => {
  if (!sensorSize) return <p className={styles.grayBg}>APS-C</p>;
  return {
    [SENSOR_SIZE.FF]: <p className={styles.redBg}>FullFrame</p>,
    [SENSOR_SIZE.APSH]: <p className={styles.orangeBg}>APS-H</p>,
    [SENSOR_SIZE.APSC]: <p className={styles.grayBg}>APS-C</p>,
    [SENSOR_SIZE.C19]: <p className={styles.yellowBg}>1.9crop</p>,
    [SENSOR_SIZE.C26]: <p className={styles.yellowBg}>2.6crop</p>,
    [SENSOR_SIZE.I23]: <p className={styles.yellowBg}>2/3&quot;</p>,
  }[sensorSize];
};

interface Props {
  sensor?: Sensor;
}

const DataSensor = (props: Props) => {
  const { sensor } = props;

  if (!sensor) return null;

  const sensorData = [sensor.name, sensor.pixelsFamiliar, sensor.type].filter((item) => !!item).join(' ');

  return (
    <tr>
      <th>Sensor</th>
      <td>
        {prettySensorSize(sensor.size)}
        {sensorData}
      </td>
    </tr>
  );
};

export default DataSensor;
