'use client';

import { Suspense, useMemo } from 'react';
// import dynamic from 'next/dynamic';
import { Dictionary } from 'lodash';

import { FBCameraType } from '@/types/cameras.d';

import Header from './Header';
import News from './News';
import Years from './Years';
import Categories from './Categories';
// import CameraYearPlaceholder from './CameraYears/Placeholder';
import styles from './index.module.scss';

// const CameraYears = dynamic(() => import('./CameraYears'), { ssr: false, loading: () => <CameraYearPlaceholder /> });

interface Props {
  cameras: FBCameraType[];
  years: Dictionary<FBCameraType[]>;
}

const Top = ({ cameras, years }: Props) => {
  const yearStart = useMemo(() => Math.min(...cameras.map((camera) => camera.year ?? 0)), [cameras]);
  const yearEnd = useMemo(() => Math.max(...cameras.map((camera) => camera.year ?? 0)), [cameras]);

  return (
    <div className={styles.top}>
      <Header yearStart={yearStart} yearEnd={yearEnd} length={cameras.length} />
      <News />
      <Categories />
      <Suspense fallback={null}>
        <Years yearStart={yearStart} yearEnd={yearEnd} years={years} />
      </Suspense>
    </div>
  );
};

export default Top;
