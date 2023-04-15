'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { groupBy } from 'lodash';

import { YearDescType, IsotopesType, FBIdolType } from '@/types/idols.d';
import { getIdolsRealtime } from '@/services/firebase/idols';

import FilterBar from './FilterBar';
import IdolYear from './IdolYear';
import styles from './Idols.module.scss';

interface Props {
  idolYears: YearDescType[];
}

const IdolsContent = ({ idolYears }: Props) => {
  const isotopes = useRef<IsotopesType>({});

  const [idols, setIdols] = useState<FBIdolType[]>([]);

  useEffect(() => {
    const unSubscribe = getIdolsRealtime(setIdols);
    return () => unSubscribe();
  }, []);

  const years = useMemo(() => groupBy(idols, 'debutYear'), [idols]);

  const yearStart = useMemo(() => Math.min(...Object.keys(years).map((year) => Number(year))), [years]);

  const yearEnd = useMemo(() => Math.max(...Object.keys(years).map((year) => Number(year))), [years]);

  const idolsLength = useMemo(() => idols.length, [idols]);

  return (
    <main className={styles.idols}>
      {idols.length > 0 && (
        <FilterBar isotopes={isotopes} idolsLength={idolsLength} yearStart={yearStart} yearEnd={yearEnd} />
      )}
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
