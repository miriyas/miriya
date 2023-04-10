'use client';

import { useMemo } from 'react';
import { useAtom } from 'jotai';
import { useMount } from 'react-use';

import { getNumberArr } from '@/utils';
import { selectedCameraAtom } from './states';
import { FBPentaxSlr } from '@/types/pentaxes.d';

import Picture from '../_common/Picture';
import Comments from '../_common/Comments';
import Camera from './Camera';
import Data from './Data';
import styles from './TabSLR.module.scss';

interface Props {
  data: FBPentaxSlr[];
}

const Contents = ({ data }: Props) => {
  const [selectedCameraName, setSelectedCameraName] = useAtom(selectedCameraAtom);
  const selectedCamera = data.find((c) => c.name === selectedCameraName);

  const yearStart = useMemo(() => Math.min(...data.map((camera) => camera.startYear)), [data]);
  const yearEnd = useMemo(() => Math.max(...data.map((camera) => camera.endYear)), [data]);

  useMount(() => {
    setSelectedCameraName('LX');
  });

  return (
    <section className={styles.wrapper}>
      <div className={styles.upper}>
        <Picture selectedCamera={selectedCamera} baseUrl='slr' />
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
              {data.map((camera) => {
                return <Camera key={camera.name} camera={camera} yearStart={yearStart} />;
              })}
            </ul>
            <div className={`${styles.endOfScroll} lastItem`} />
          </div>
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <Comments selectedCameraId={selectedCamera?.id} />
        <Data selectedCamera={selectedCamera} />
      </div>
    </section>
  );
};

export default Contents;
