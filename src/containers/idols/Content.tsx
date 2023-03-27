'use client';

import { useMemo, useRef } from 'react';
import { groupBy } from 'lodash';

import { IDOLS } from '@/constants/idols';
import { IsotopesType } from '@/types/index.d';

import FilterBar from './FilterBar';
import IdolYear from './IdolYear';
import styles from './Idols.module.scss';

const IdolsContent = () => {
  const isotopes = useRef<IsotopesType>({});
  const years = useMemo(() => groupBy(IDOLS, 'debutYear'), []);

  return (
    <main className={styles.idols}>
      <FilterBar isotopes={isotopes} />
      <ul className={styles.idolYears}>
        {Object.keys(years).map((year) => {
          const idols = years[year].sort((a, b) => a.name.localeCompare(b.name, 'ko'));
          return <IdolYear key={year} idols={idols} year={Number(year)} isotopes={isotopes} />;
        })}
      </ul>
    </main>
  );
};

export default IdolsContent;
