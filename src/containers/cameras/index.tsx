import dynamic from 'next/dynamic';
import { Dictionary } from 'lodash';

import { FBCameraType } from '@/types/cameras';

import TopPlaceholder from './Top/Placeholder';
import CameraYearPlaceholder from './CameraYears/Placeholder';

const Top = dynamic(() => import('./Top'), { ssr: false, loading: () => <TopPlaceholder /> });
const CameraYears = dynamic(() => import('./CameraYears'), { ssr: false, loading: () => <CameraYearPlaceholder /> });

interface Props {
  cameras: FBCameraType[];
  years: Dictionary<FBCameraType[]>;
}

const CamerasPage = ({ cameras, years }: Props) => {
  if (cameras.length === 0) return null;

  return (
    <main>
      <Top cameras={cameras} years={years} />
      <CameraYears years={years} />
    </main>
  );
};

export default CamerasPage;
