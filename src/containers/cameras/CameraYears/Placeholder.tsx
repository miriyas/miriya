'use client';

import cx from 'clsx';

import { getNumberArr } from '@/utils';

import CameraPlaceholder from './CameraCard/Placeholder';
import styles from './index.module.scss';

const CameraYearPlaceholder = () => {
  return (
    <ul className={styles.cameraYears}>
      {[1995, 1996].map((year) => {
        const key = `camera-year-placeholder-${year}`;
        return (
          <li key={key} className={cx(styles.cameraYear, styles.placeholder)}>
            <div className={styles.title}>{year}년</div>

            <ul className={styles.cameras}>
              {getNumberArr(4).map((camera) => {
                const cameraKey = `camera-placeholder-${camera}`;
                return <CameraPlaceholder key={cameraKey} />;
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default CameraYearPlaceholder;
