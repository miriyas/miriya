'use client';

import cx from 'clsx';

import { getNumberArr } from '@/utils';

import CameraPlaceholder from '@/components/Camera/Placeholder';
import styles from './CameraYear.module.scss';

const CameraYearPlaceholder = () => {
  return (
    <li className={cx(styles.cameraYear, styles.placeholder)}>
      <div className={styles.title}>0000년</div>

      <ul className={styles.cameras}>
        {getNumberArr(4).map((camera) => {
          const key = `camera-placeholder-${camera}`;
          return <CameraPlaceholder key={key} />;
        })}
      </ul>
    </li>
  );
};

export default CameraYearPlaceholder;
