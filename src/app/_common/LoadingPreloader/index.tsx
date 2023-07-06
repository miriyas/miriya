'use client';

import { getNumberArr } from '@/utils';
/* eslint-disable @next/next/no-img-element */

import styles from './index.module.scss';

const LoadingPreloader = () => {
  return (
    <div className={styles.loadingPreloader}>
      {getNumberArr(15).map((i) => {
        const key = `cursor-${i + 1}`;
        return <img key={key} src={`/images/hourGlassCursor/cursor${i + 1}.png`} alt='' />;
      })}
    </div>
  );
};

export default LoadingPreloader;
