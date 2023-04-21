'use client';

import dynamic from 'next/dynamic';

import useCameras from './useCameras';

import Loading from '@/components/Loading';
import CameraYearPlaceholder from './CameraYears/Placeholder';

const Top = dynamic(() => import('./Top'), { ssr: false, loading: () => <Loading /> });
const CameraYears = dynamic(() => import('./CameraYears'), { ssr: false, loading: () => <CameraYearPlaceholder /> });

const CamerasPageContent = () => {
  const { cameras, years } = useCameras();

  if (cameras.length === 0) return null;

  return (
    <main>
      <Top cameras={cameras} years={years} />
      <CameraYears years={years} />
    </main>
  );
};

export default CamerasPageContent;
