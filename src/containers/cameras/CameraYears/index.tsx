'use client';

import { MutableRefObject, useEffect } from 'react';
import { groupBy } from 'lodash';

import { IsotopesType } from '@/types/index.d';
import { CAMERAS } from '@/constants/cameras';

import Year from './Year';
import styles from './CameraYears.module.scss';

interface Props {
  isotopes: MutableRefObject<IsotopesType>;
}

const CameraYears = ({ isotopes }: Props) => {
  const years = groupBy(CAMERAS, 'year');

  useEffect(() => {
    const currentHash = window.location.hash.replace('#', '');
    document.getElementById(currentHash)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <ul className={styles.cameraYears}>
      {Object.keys(years).map((year) => {
        return <Year key={year} cameras={years[year]} year={Number(year)} isotopes={isotopes} />;
      })}
    </ul>
  );
};

export default CameraYears;
