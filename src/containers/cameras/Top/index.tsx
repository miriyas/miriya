'use client';

import { Suspense } from 'react';
// import dynamic from 'next/dynamic';
import { groupBy } from 'lodash';

import { CAMERAS } from '@/constants/cameras';

import Header from './Header';
import News from './News';
import Years from './Years';
import Categories from './Categories';
// import CameraYearPlaceholder from './CameraYears/Placeholder';
import styles from './index.module.scss';

// const CameraYears = dynamic(() => import('./CameraYears'), { ssr: false, loading: () => <CameraYearPlaceholder /> });

const Top = () => {
  const years = groupBy(CAMERAS, 'year');

  return (
    <div className={styles.top}>
      <Header />
      <News />
      <Categories />
      <Suspense fallback={null}>
        <Years years={years} />
      </Suspense>
    </div>
  );
};

export default Top;
