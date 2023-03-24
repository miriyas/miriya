'use client';

import { Suspense, useRef } from 'react';
import { useMount } from 'react-use';
import { groupBy } from 'lodash';
import dynamic from 'next/dynamic';

import { IsotopesType } from '@/types/index.d';
import { CAMERAS } from '@/constants/cameras';

import FilterBar from './FilterBar';
import CameraYearPlaceholder from './CameraYear/Placeholder';
import styles from './Cameras.module.scss';

const CameraYear = dynamic(() => import('./CameraYear'), { ssr: false, loading: () => <CameraYearPlaceholder /> });

const CamerasContent = () => {
  const years = groupBy(CAMERAS, 'year');
  const isotopes = useRef<IsotopesType>({});

  useMount(() => {
    const currentHash = window.location.hash.replace('#', '');
    document.getElementById(currentHash)?.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <main className={styles.cameras}>
      <Suspense fallback={null}>
        <FilterBar isotopes={isotopes} />
      </Suspense>
      <ul className={styles.cameraYears}>
        {Object.keys(years).map((year) => {
          return <CameraYear key={year} cameras={years[year]} year={Number(year)} isotopes={isotopes} />;
        })}
      </ul>
    </main>
  );
};

export default CamerasContent;
