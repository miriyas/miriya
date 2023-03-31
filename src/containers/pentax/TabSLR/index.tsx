'use client';

import { useAtomValue } from 'jotai';

import { PENTAX_SLRS, PENTAX_SLRS_YEAR_INFO } from '@/constants/pentaxes';
import { getNumberArr } from '@/utils';
import { selectedCameraAtom } from './states';

import Picture from '../_common/Picture';
import Camera from './Camera';
import Data from './Data';
import styles from './TabSLR.module.scss';

const { start: yearStart, end: yearEnd } = PENTAX_SLRS_YEAR_INFO;

const PentaxSLRPage = () => {
  const selectedCameraName = useAtomValue(selectedCameraAtom);

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
                return <Camera key={camera.name} camera={camera} />;
              })}
            </ul>
            <div className={`${styles.endOfScroll} lastItem`} />
          </div>
        </div>
      </div>
      <Data />
    </section>
  );
};

export default PentaxSLRPage;
