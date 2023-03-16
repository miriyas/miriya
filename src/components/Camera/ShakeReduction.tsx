import cx from 'classnames';

import { CameraMakerTypes, CAMERA_MAKER, Sensor } from '@/types/cameras.d';

import styles from './ShakeReduction.module.scss';

const NAMES = {
  [CAMERA_MAKER.CANON]: 'IS',
  [CAMERA_MAKER.FUJIFILM]: 'OIS',
  [CAMERA_MAKER.MINOLTA]: 'AS',
  [CAMERA_MAKER.NIKON]: 'VR',
  [CAMERA_MAKER.PANASONIC]: 'IS',
  [CAMERA_MAKER.PENTAX]: 'SR',
  [CAMERA_MAKER.SAMSUNG]: 'OIS',
  [CAMERA_MAKER.SIGMA]: 'OS',
  [CAMERA_MAKER.SONY]: 'SSS',
};

interface Props {
  maker: CameraMakerTypes;
  sensor?: Sensor;
}

const ShakeReduction = (props: Props) => {
  const { maker, sensor } = props;

  if (!sensor || !sensor.vr) return null;

  return <div className={cx(styles.shakeReduction, styles[maker.toLowerCase()])}>{NAMES[maker]}</div>;
};

export default ShakeReduction;
