import { OPTICS_TYPE, OpticsTypes, SensorSizeTypes, SENSOR_SIZE } from '@/types/cameras.d';

export const prettyOpticsType = (type?: OpticsTypes) => {
  if (!type) return '';
  return {
    [OPTICS_TYPE.PENTA_PRISM]: '펜타프리즘',
    [OPTICS_TYPE.PENTA_MIRROR]: '펜타미러',
  }[type];
};

export const prettySensorSize = (sensorSize?: SensorSizeTypes) => {
  if (!sensorSize) return 'APS-C';
  return {
    [SENSOR_SIZE.FF]: 'FF',
    [SENSOR_SIZE.APSH]: 'APS-H',
    [SENSOR_SIZE.APSC]: 'APS-C',
    [SENSOR_SIZE.C19]: '1.9crop',
    [SENSOR_SIZE.C26]: '2.6crop',
    [SENSOR_SIZE.I23]: '2/3"',
  }[sensorSize];
};
