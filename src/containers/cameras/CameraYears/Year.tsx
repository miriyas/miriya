'use client';

import { Suspense } from 'react';
import cx from 'clsx';
import { useAtomValue } from 'jotai';

import { CameraType } from '@/types/cameras';
import { selectedMakerAtom } from '@/containers/cameras/states';

import Camera from '@/components/Camera';
import styles from './CameraYears.module.scss';

interface Props {
  cameras: CameraType[];
  year: number;
}

const CameraYear = (props: Props) => {
  const { cameras, year } = props;

  const selectedMaker = useAtomValue(selectedMakerAtom);

  const filteredCameras = cameras.filter((c) => (selectedMaker === 'ALL' ? c : c.maker === selectedMaker));

  if (filteredCameras.length === 0) return null;

  return (
    <li id={`camera-year-${year}`} className={styles.cameraYear}>
      <div className={styles.title}>
        {year}년 <span>{filteredCameras.length}기종</span>
      </div>

      <ul className={cx(styles.cameras, `grid-${year}`)}>
        {filteredCameras.map((camera) => {
          return (
            <Suspense key={`${camera.maker}-${camera.year}-${camera.name}`} fallback={null}>
              <Camera camera={camera} />
            </Suspense>
          );
        })}
      </ul>
    </li>
  );
};

export default CameraYear;
