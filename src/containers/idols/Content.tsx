'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Dictionary } from 'lodash';
import { useAtom } from 'jotai';
import { useRafState } from 'react-use';

import { Idol, YearDesc } from '@/types/idols.d';
import New from '@/containers/idols/IdolYear/IdolCard/Editor/New';
import { showIdolEndAtom } from '@/containers/idols/states';

import FilterBar from './FilterBar';
import Cover from './Cover';
import styles from './index.module.scss';
import Placeholder from './IdolYear/Placeholder';

const IdolYear = dynamic(() => import('./IdolYear'), { ssr: false, loading: () => <Placeholder /> });
const SupporterOnly = dynamic(() => import('@/components/AdminOnly'), { ssr: false });

interface Props {
  idols: Idol[];
  years: YearDesc[];
  debutYears: Dictionary<Idol[]>;
  yearStart: number;
  yearEnd: number;
}

const IdolsPageContent = ({ idols, years, debutYears, yearStart, yearEnd }: Props) => {
  const viewMoreRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [observed, setObserved] = useRafState(false);
  const [yearsEnd, setYearsEnd] = useAtom(showIdolEndAtom);

  useEffect(() => {
    if (observed || !viewMoreRef.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].intersectionRatio > 0) setYearsEnd((prev) => prev + 1);
    };

    observerRef.current = new IntersectionObserver(callback, {
      root: document,
      threshold: 0,
    });
    observerRef.current.observe(viewMoreRef.current);
    setObserved(true);
  }, [setObserved, observed, viewMoreRef, setYearsEnd]);

  return (
    <main className={styles.idols}>
      {idols.length > 0 && <FilterBar idolsLength={idols.length} yearStart={yearStart} yearEnd={yearEnd} />}
      <ul className={styles.idolYears}>
        {Object.keys(debutYears)
          .splice(0, yearsEnd)
          .map((year) => {
            const yearIdols = debutYears[year].sort((a, b) => a.name.localeCompare(b.name, 'ko'));
            const desc = years.find((yearDesc) => yearDesc.year === Number(year))?.desc ?? '';
            return <IdolYear key={year} idols={yearIdols} year={Number(year)} yearDesc={desc} />;
          })}
      </ul>
      <div className={styles.viewMore} ref={viewMoreRef} />
      <Cover />
      <SupporterOnly>
        <New />
      </SupporterOnly>
    </main>
  );
};

export default IdolsPageContent;
