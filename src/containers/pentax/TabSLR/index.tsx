'use client';

import { useMemo } from 'react';
import { useAtomValue } from 'jotai';

import { PENTAX_SLRS } from '@/constants/pentaxes';
import { getNumberArr } from '@/utils';
import { selectedCameraAtom } from './states';

import Picture from '../_common/Picture';
import Camera from './Camera';
import Data from './Data';
import Comments from './Comments';
import styles from './TabSLR.module.scss';

const PentaxSLRPage = () => {
  const selectedCameraName = useAtomValue(selectedCameraAtom);

  const yearStart = useMemo(() => Math.min(...PENTAX_SLRS.map((camera) => camera.startYear)), []);
  const yearEnd = useMemo(() => Math.max(...PENTAX_SLRS.map((camera) => camera.endYear)), []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.upper}>
        <Picture selectedCameraName={selectedCameraName} baseUrl='slr' />
        <div className={styles.rightWing}>
          <div className={styles.yearsWrapper}>
            <ol className={styles.years}>
              {getNumberArr((yearEnd - yearStart + 1) / 5 + 1).map((n) => {
                const year = yearStart + n * 5;
                return <li key={year}>{year}</li>;
              })}
            </ol>
          </div>
          <div className={styles.timeline}>
            <div className={styles.gridsWrapper}>
              <div className={styles.cssGrid} />
            </div>
            <ul className={styles.cameras}>
              {PENTAX_SLRS.map((camera) => {
                return <Camera key={camera.name} camera={camera} yearStart={yearStart} />;
              })}
            </ul>
            <div className={`${styles.endOfScroll} lastItem`} />
          </div>
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <Comments />
        <Data />
      </div>
    </section>
  );
};

export default PentaxSLRPage;
