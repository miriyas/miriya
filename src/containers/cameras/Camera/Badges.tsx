import cx from 'classnames';
import Image from 'next/image';

import { CameraType, CAMERA_MAKER, GRADE } from '@/types/cameras.d';

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

const LOGO_WIDTHS = {
  [CAMERA_MAKER.CANON]: 96,
  [CAMERA_MAKER.CONTAX]: 120,
  [CAMERA_MAKER.FUJIFILM]: 120,
  [CAMERA_MAKER.KODAK]: 79,
  [CAMERA_MAKER.MINOLTA]: 102,
  [CAMERA_MAKER.NIKON]: 79,
  [CAMERA_MAKER.OLYMPUS]: 128,
  [CAMERA_MAKER.PANASONIC]: 132,
  [CAMERA_MAKER.PENTAX]: 100,
  [CAMERA_MAKER.SAMSUNG]: 130,
  [CAMERA_MAKER.SIGMA]: 91,
  [CAMERA_MAKER.SONY]: 113,
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
        <div className={cx(styles.makerLogo, styles[maker.toLowerCase()])}>
          <Image src={`/images/cameras/makers/logo-${maker}.png`} alt='' width={LOGO_WIDTHS[maker]} height={20} />
        </div>
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
