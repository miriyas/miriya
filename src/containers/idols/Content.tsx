'use client';

import { useMemo, useRef } from 'react';
import { groupBy } from 'lodash';

import { IsotopesType } from '@/types/index.d';
import { IdolType, YearDescType } from '@/types/idols.d';

import FilterBar from './FilterBar';
import IdolYear from './IdolYear';
import styles from './Idols.module.scss';

interface Props {
  idols: IdolType[];
  idolYears: YearDescType[];
}

const IdolsContent = ({ idols, idolYears }: Props) => {
  const isotopes = useRef<IsotopesType>({});

  const years = useMemo(() => groupBy(idols, 'debutYear'), [idols]);

  const yearStart = useMemo(() => Math.min(...Object.keys(years).map((year) => Number(year))), [years]);

  const yearEnd = useMemo(() => Math.max(...Object.keys(years).map((year) => Number(year))), [years]);

  const idolsLength = useMemo(() => idols.length, [idols]);

  return (
    <main className={styles.idols}>
      <FilterBar isotopes={isotopes} idolsLength={idolsLength} yearStart={yearStart} yearEnd={yearEnd} />
      <ul className={styles.idolYears}>
        {Object.keys(years).map((year) => {
          const yearIdols = years[year].sort((a, b) => a.name.localeCompare(b.name, 'ko'));
          const desc = idolYears.find((yearDesc) => yearDesc.year === Number(year))?.desc ?? '';
          return <IdolYear key={year} idols={yearIdols} year={Number(year)} isotopes={isotopes} yearDesc={desc} />;
        })}
      </ul>
    </main>
  );
};

export default IdolsContent;
