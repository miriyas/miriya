'use client';

import { useRef } from 'react';
import { groupBy } from 'lodash';

import { IsotopesType } from '@/types/index.d';
import { CAMERAS } from '@/constants/cameras';

import FilterBar from './FilterBar';
import CameraYear from './CameraYear';
import styles from './Cameras.module.scss';

const CamerasContent = () => {
  const years = groupBy(CAMERAS, 'year');
  const isotopes = useRef<IsotopesType>({});

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
