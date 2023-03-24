'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import FilterBar from './FilterBar';
import CameraYearPlaceholder from './CameraYears/Placeholder';
import styles from './Cameras.module.scss';

const CameraYears = dynamic(() => import('./CameraYears'), { ssr: false, loading: () => <CameraYearPlaceholder /> });

const CamerasContent = () => {
  return (
    <main className={styles.cameras}>
      <Suspense fallback={null}>
        <FilterBar />
      </Suspense>
      <CameraYears />
    </main>
  );
};

export default CamerasContent;
