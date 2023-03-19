import cx from 'classnames';

import { CameraType, CAMERA_MAKER, GRADE } from '@/types/cameras.d';

import {
  LogoCanon,
  LogoFujifilm,
  LogoKodak,
  LogoMinolta,
  LogoNikon,
  LogoOlympus,
  LogoPanasonic,
  LogoPentax,
  LogoSamsung,
  LogoSony,
} from '../../../public/images/svgs';
import styles from './Badges.module.scss';

const GRADES = {
  [GRADE.FLAGSHIP]: '플래그십',
  [GRADE.PROFESSIONAL]: '프로',
  [GRADE.ADVANCED]: '상급기',
  [GRADE.MIDRANGE]: '중급기',
  [GRADE.ENTRYMID]: '중하급기',
  [GRADE.ENTRY]: '입문기',
  [GRADE.VALUE]: '저렴이',
} as const;

const LOGOS = {
  [CAMERA_MAKER.CANON]: <LogoCanon />,
  [CAMERA_MAKER.FUJIFILM]: <LogoFujifilm />,
  [CAMERA_MAKER.MINOLTA]: <LogoMinolta />,
  [CAMERA_MAKER.KODAK]: <LogoKodak />,
  [CAMERA_MAKER.NIKON]: <LogoNikon />,
  [CAMERA_MAKER.OLYMPUS]: <LogoOlympus />,
  [CAMERA_MAKER.PANASONIC]: <LogoPanasonic />,
  [CAMERA_MAKER.PENTAX]: <LogoPentax />,
  [CAMERA_MAKER.SAMSUNG]: <LogoSamsung />,
  [CAMERA_MAKER.SONY]: <LogoSony />,
};

const SHAKE_REDUCTION_NAMES = {
  [CAMERA_MAKER.CANON]: 'IS',
  [CAMERA_MAKER.FUJIFILM]: 'OIS',
  [CAMERA_MAKER.KODAK]: 'OIS',
  [CAMERA_MAKER.MINOLTA]: 'AS',
  [CAMERA_MAKER.NIKON]: 'VR',
  [CAMERA_MAKER.PANASONIC]: 'IS',
  [CAMERA_MAKER.PENTAX]: 'SR',
  [CAMERA_MAKER.SAMSUNG]: 'OIS',
  [CAMERA_MAKER.SIGMA]: 'OS', // EIS
  [CAMERA_MAKER.SONY]: 'SSS',
};

interface Props {
  camera: CameraType;
}

const BadgesMakerLogo = (props: Props) => {
  const { camera } = props;
  const { grade, maker, mount, sensor } = camera;

  return (
    <div className={styles.badges}>
      <div className={styles.leftWing}>
        <div className={cx(styles.makerLogo, styles[maker.toLowerCase()])}>{LOGOS[maker]}</div>
        {grade && (
          <div className={cx(styles.grade, styles[grade.toLowerCase()])}>
            {mount}
            {GRADES[grade]}
          </div>
        )}
      </div>
      <div className={styles.rightWing}>
        {sensor?.astro && <div className={styles.astro}>천체촬영</div>}
        {sensor?.ir && <div className={styles.ir}>적외선촬영</div>}
        {sensor?.vr && (
          <div className={cx(styles.shakeReduction, styles[maker.toLowerCase()])}>{SHAKE_REDUCTION_NAMES[maker]}</div>
        )}
      </div>
    </div>
  );
};

export default BadgesMakerLogo;
