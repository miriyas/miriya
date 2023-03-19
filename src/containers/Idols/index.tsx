'use client';

import { useRef } from 'react';
import { groupBy } from 'lodash';

import { IDOLS } from '@/constants/idols';
import { IsotopesType } from '@/types/index.d';

import FilterBar from './FilterBar';
import IdolYear from './IdolYear';
import styles from './Idols.module.scss';

const Idols = () => {
  const years = groupBy(IDOLS, 'debutYear');
  const isotopes = useRef<IsotopesType>({});

  return (
    <main className={styles.idols}>
      <FilterBar isotopes={isotopes} />
      <ul className={styles.idolYears}>
        {Object.keys(years).map((year) => {
          return <IdolYear key={year} idols={years[year]} year={Number(year)} isotopes={isotopes} />;
        })}
      </ul>
    </main>
  );
};

export default Idols;
