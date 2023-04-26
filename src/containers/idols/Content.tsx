'use client';

import { useRef } from 'react';

import useIdols from './useIdols';
import { IsotopesType } from '@/types/idols.d';

import FilterBar from './FilterBar';
import IdolYear from './IdolYear';
import styles from './Idols.module.scss';

const IdolsPageContent = () => {
  const isotopes = useRef<IsotopesType>({});

  const { idols, debutYears, yearStart, yearEnd, years } = useIdols();

  return (
    <main className={styles.idols}>
      {idols.length > 0 && (
        <FilterBar isotopes={isotopes} idolsLength={idols.length} yearStart={yearStart} yearEnd={yearEnd} />
      )}
      <ul className={styles.idolYears}>
        {Object.keys(debutYears).map((year) => {
          const yearIdols = debutYears[year].sort((a, b) => a.name.localeCompare(b.name, 'ko'));
          const desc = years.find((yearDesc) => yearDesc.year === Number(year))?.desc ?? '';
          return <IdolYear key={year} idols={yearIdols} year={Number(year)} isotopes={isotopes} yearDesc={desc} />;
        })}
      </ul>
    </main>
  );
};

export default IdolsPageContent;
