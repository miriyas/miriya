'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { groupBy } from 'lodash';
import { useAtomValue } from 'jotai';

import { CAMERAS } from '@/constants/cameras';
import { selectedMakerAtom } from '@/containers/cameras/states';

import FilterBar from './FilterBar';
import CameraYearPlaceholder from './CameraYears/Placeholder';
import styles from './Cameras.module.scss';

const CameraYears = dynamic(() => import('./CameraYears'), { ssr: false, loading: () => <CameraYearPlaceholder /> });

const Cameras = () => {
  const selectedMaker = useAtomValue(selectedMakerAtom);
  const filteredCameras = CAMERAS.filter((camera) =>
    selectedMaker === 'ALL' ? camera : camera.maker === selectedMaker,
  );
  const years = groupBy(filteredCameras, 'year');

  return (
    <main className={styles.cameras}>
      <Suspense fallback={null}>
        <FilterBar years={years} />
      </Suspense>
      <CameraYears years={years} />
    </main>
  );
};

export default Cameras;
