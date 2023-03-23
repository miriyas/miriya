'use client';

import { useRef } from 'react';
import { groupBy } from 'lodash';
import { useMount } from 'react-use';
import { useSetAtom } from 'jotai';

import { IsotopesType } from '@/types/index.d';
import { CAMERAS } from '@/constants/cameras';
import { selectedCameraAtom } from '@/containers/cameras/states';

import FilterBar from './FilterBar';
import CameraYear from './CameraYear';
import styles from './Cameras.module.scss';

const CamerasContent = () => {
  const years = groupBy(CAMERAS, 'year');
  const isotopes = useRef<IsotopesType>({});
  const setSelected = useSetAtom(selectedCameraAtom);

  useMount(() => {
    if (!window.location.hash) return;
    setSelected(window.location.hash.replace('#', ''));
  });

  return (
    <main className={styles.cameras}>
      <FilterBar isotopes={isotopes} />
      <ul className={styles.cameraYears}>
        {Object.keys(years).map((year) => {
          return <CameraYear key={year} cameras={years[year]} year={Number(year)} isotopes={isotopes} />;
        })}
      </ul>
    </main>
  );
};

export default CamerasContent;
