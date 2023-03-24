'use client';

import { Suspense, useRef } from 'react';
import dynamic from 'next/dynamic';

import { IsotopesType } from '@/types/index.d';

import FilterBar from './FilterBar';
import CameraYearPlaceholder from './CameraYears/Placeholder';
import styles from './Cameras.module.scss';

const CameraYears = dynamic(() => import('./CameraYears'), { ssr: false, loading: () => <CameraYearPlaceholder /> });

const CamerasContent = () => {
  const isotopes = useRef<IsotopesType>({});

  return (
    <main className={styles.cameras}>
      <Suspense fallback={null}>
        <FilterBar isotopes={isotopes} />
      </Suspense>
      <CameraYears isotopes={isotopes} />
    </main>
  );
};

export default CamerasContent;
