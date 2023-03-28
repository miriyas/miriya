'use client';

import { Suspense } from 'react';
// import dynamic from 'next/dynamic';
import { groupBy } from 'lodash';

import { CAMERAS } from '@/constants/cameras';

import FilterBar from './FilterBar';
// import CameraYearPlaceholder from './CameraYears/Placeholder';
import CameraYears from './CameraYears';
// const CameraYears = dynamic(() => import('./CameraYears'), { ssr: false, loading: () => <CameraYearPlaceholder /> });

const CamerasPage = () => {
  const years = groupBy(CAMERAS, 'year');

  return (
    <main>
      <Suspense fallback={null}>
        <FilterBar years={years} />
      </Suspense>
      <CameraYears years={years} />
    </main>
  );
};

export default CamerasPage;
