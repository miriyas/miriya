import { OPTICS_TYPE, OpticsTypes, SensorSizeTypes, SENSOR_SIZE, FocusType, Sensor } from '@/types/cameras.d';

import styles from './Camera.module.scss';

export const prettyOpticsType = (type?: OpticsTypes) => {
  if (!type) return '';
  return {
    [OPTICS_TYPE.PENTA_PRISM]: '펜타프리즘',
    [OPTICS_TYPE.PENTA_MIRROR]: '펜타미러',
  }[type];
};

export const prettySensorSize = (sensorSize?: SensorSizeTypes) => {
  if (!sensorSize) return <p className={styles.gray}>APS-C</p>;
  return {
    [SENSOR_SIZE.FF]: <p className={styles.red}>FullFrame</p>,
    [SENSOR_SIZE.APSH]: <p className={styles.orange}>APS-H</p>,
    [SENSOR_SIZE.APSC]: <p className={styles.gray}>APS-C</p>,
    [SENSOR_SIZE.C19]: '1.9crop',
    [SENSOR_SIZE.C26]: '2.6crop',
    [SENSOR_SIZE.I23]: '2/3"',
  }[sensorSize];
};

export const extractSensorData = (sensor?: Sensor) => {
  if (!sensor) return '?';
  const sensorData = [sensor.name, sensor.pixelsFamiliar, sensor.type].filter((item) => !!item).join(' ');
  return (
    <>
      {prettySensorSize(sensor.size)}
      {sensorData}
    </>
  );
};

export const extractAFData = (focus?: FocusType) => {
  if (!focus) return '?';

  const pointData = focus?.points ? `${focus?.points}point` : '';
  const pointCrossData = focus?.pointsCross ? `${focus?.pointsCross}cross` : '';
  const pointsData = [pointData, pointCrossData].filter((item) => !!item).join('/');

  if (focus.name) {
    // CAM1000, SAFOX VII
    return (
      <>
        {focus.name}
        <br />
        {pointsData}
      </>
    );
  }

  return pointsData;
};
