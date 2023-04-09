'use client';

import { PentaxSlr } from '@/types/pentaxes';

import DataColumn1 from './Column1';
import DataColumn2 from './Column2';
import DataColumn3 from './Column3';
import styles from './Data.module.scss';

interface Props {
  selectedCamera?: PentaxSlr;
}

const Data = ({ selectedCamera }: Props) => {
  if (!selectedCamera) return null;

  return (
    <div className={styles.data}>
      <DataColumn1 camera={selectedCamera} />
      <DataColumn2 camera={selectedCamera} />
      <DataColumn3 camera={selectedCamera} />
    </div>
  );
};

export default Data;
