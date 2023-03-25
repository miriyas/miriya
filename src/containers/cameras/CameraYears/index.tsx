'use client';

import { useEffect } from 'react';
import { Dictionary } from 'lodash';

import { CameraType } from '@/types/cameras';

import Year from './Year';
import styles from './CameraYears.module.scss';

interface Props {
  years: Dictionary<CameraType[]>;
}

const CameraYears = ({ years }: Props) => {
  useEffect(() => {
    // 초기 로딩시 해시 아이디가 있으면 해당 기종 위치로 이동
    const currentHash = window.location.hash.replace('#', '');
    document.getElementById(currentHash)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <ul className={styles.cameraYears}>
      {Object.keys(years).map((year) => {
        return <Year key={year} cameras={years[year]} year={Number(year)} />;
      })}
    </ul>
  );
};

export default CameraYears;
