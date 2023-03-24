'use client';

import cx from 'clsx';
import { groupBy } from 'lodash';

import { getNumberArr } from '@/utils';
import { CAMERAS } from '@/constants/cameras';

import CameraPlaceholder from '@/components/Camera/Placeholder';
import styles from './CameraYears.module.scss';

const CameraYearPlaceholder = () => {
  const years = groupBy(CAMERAS, 'year');

  return (
    <ul className={styles.cameraYears}>
      {Object.keys(years).map((year) => {
        const key = `camera-year-placeholder-${year}`;
        return (
          <li key={key} className={cx(styles.cameraYear, styles.placeholder)}>
            <div className={styles.title}>0000년</div>

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
