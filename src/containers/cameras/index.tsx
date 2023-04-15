'use client';

// import dynamic from 'next/dynamic';
import { groupBy } from 'lodash';
import { useEffect, useState } from 'react';

import { FBCameraType } from '@/types/cameras.d';
import { getCamerasRealtime } from '@/services/firebase/cameras';

import Top from './Top';
// import CameraYearPlaceholder from './CameraYears/Placeholder';
import CameraYears from './CameraYears';

// const CameraYears = dynamic(() => import('./CameraYears'), { ssr: false, loading: () => <CameraYearPlaceholder /> });

const CamerasPage = () => {
  const [cameras, setCameras] = useState<FBCameraType[]>([]);

  useEffect(() => {
    const unSubscribe = getCamerasRealtime(setCameras);
    return () => unSubscribe();
  }, []);

  const years = groupBy(cameras, 'year');

  if (cameras.length === 0) return null;

  return (
    <main>
      <Top cameras={cameras} years={years} />
      <CameraYears years={years} />
    </main>
  );
};

export default CamerasPage;
