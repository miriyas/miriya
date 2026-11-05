import { Dictionary } from 'lodash';

import { CameraType } from '@/types/cameras';

import { Top, CameraYears } from './lazy';

interface Props {
  cameras: CameraType[];
  years: Dictionary<CameraType[]>;
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
