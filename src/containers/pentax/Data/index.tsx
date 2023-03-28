'use client';

import { useAtomValue } from 'jotai';

import { PENTAX_DSLRS } from '@/constants/pentaxes';
import { selectedCameraAtom } from '@/containers/pentax/states';

import DataColumn1 from './Column1';
import DataColumn2 from './Column2';
import DataColumn3 from './Column3';
import styles from './Data.module.scss';

const Data = () => {
  const selectedCameraName = useAtomValue(selectedCameraAtom);

  const camera = PENTAX_DSLRS.find((c) => c.name === selectedCameraName) || PENTAX_DSLRS[0];

  return (
    <div className={styles.data}>
      <DataColumn1 camera={camera} />
      <DataColumn2 camera={camera} />
      <DataColumn3 camera={camera} />
    </div>
  );
};

export default Data;
