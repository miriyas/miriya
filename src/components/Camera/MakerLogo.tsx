import cx from 'classnames';

import { CameraMakerTypes, CAMERA_MAKER } from '@/types/cameras.d';

import styles from './MakerLogo.module.scss';
import {
  LogoCanon,
  LogoFujifilm,
  LogoKodak,
  LogoMinolta,
  LogoNikon,
  LogoPentax,
  LogoSamsung,
  LogoSony,
} from '../../../public/images/svgs';

const LOGOS = {
  [CAMERA_MAKER.CANON]: <LogoCanon />,
  [CAMERA_MAKER.FUJIFILM]: <LogoFujifilm />,
  [CAMERA_MAKER.MINOLTA]: <LogoMinolta />,
  [CAMERA_MAKER.KODAK]: <LogoKodak />,
  [CAMERA_MAKER.NIKON]: <LogoNikon />,
  [CAMERA_MAKER.PENTAX]: <LogoPentax />,
  [CAMERA_MAKER.SAMSUNG]: <LogoSamsung />,
  [CAMERA_MAKER.SONY]: <LogoSony />,
};

interface Props {
  maker: CameraMakerTypes;
}

const MakerLogo = (props: Props) => {
  const { maker } = props;

  return <div className={cx(styles.makerLogo, styles[maker.toLowerCase()])}>{LOGOS[maker]}</div>;
};

export default MakerLogo;
