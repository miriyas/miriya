'use client';

// import dynamic from 'next/dynamic';
import { groupBy } from 'lodash';

import { CAMERAS } from '@/constants/cameras';

import Top from './Top';
// import CameraYearPlaceholder from './CameraYears/Placeholder';
import CameraYears from './CameraYears';

// const CameraYears = dynamic(() => import('./CameraYears'), { ssr: false, loading: () => <CameraYearPlaceholder /> });

const CamerasPage = () => {
  const years = groupBy(CAMERAS, 'year');

  return (
    <main>
      <Top />
      <CameraYears years={years} />
    </main>
  );
};

export default CamerasPage;
