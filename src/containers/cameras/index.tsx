'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { groupBy } from 'lodash';

import { CAMERAS } from '@/constants/cameras';

import FilterBar from './FilterBar';
import CameraYearPlaceholder from './CameraYears/Placeholder';
import styles from './Cameras.module.scss';

const CameraYears = dynamic(() => import('./CameraYears'), { ssr: false, loading: () => <CameraYearPlaceholder /> });

const CamerasPage = () => {
  const years = groupBy(CAMERAS, 'year');

  return (
    <main className={styles.cameras}>
      <Suspense fallback={null}>
        <FilterBar years={years} />
      </Suspense>
      <CameraYears years={years} />
    </main>
  );
};

export default CamerasPage;
