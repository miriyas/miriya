'use client';

import { MutableRefObject, useCallback, useEffect, useMemo } from 'react';
import cx from 'clsx';

import type { IsotopeOptions } from 'isotope-layout';
import { IsotopesType } from '@/types';
import { IdolType } from '@/types/idols.d';
import Isotope from '@/libs/isotope-layout';
import { useResponsive } from '@/hooks/useResponsive';

import IdolCard from './IdolCard';
import styles from './IdolYear.module.scss';

interface Props {
  idols: IdolType[];
  year: number;
  isotopes: MutableRefObject<IsotopesType>;
  yearDesc: string;
}

const IdolYear = (props: Props) => {
  const { idols, isotopes, year, yearDesc } = props;

  const { isMobile } = useResponsive();

  const OPTIONS: IsotopeOptions = useMemo(
    () => ({
      itemSelector: `.grid-item-${year}`,
      layoutMode: 'packery',
      transitionDuration: 200,
      percentPosition: true,
      packery: {
        gutter: 28,
        columnWidth: isMobile ? 132 : 140,
      },
    }),
    [year, isMobile],
  );

  useEffect(() => {
    const elem = document.querySelector<HTMLElement>(`.grid-${year}`);
    if (!elem) return;

    isotopes.current[year] = new Isotope(elem, OPTIONS);
  }, [OPTIONS, isotopes, year]);

  const sort = useCallback(() => {
    setTimeout(() => {
      isotopes.current[year].arrange(OPTIONS);
    }, 100); // NOTE: covers transition duration
  }, [OPTIONS, isotopes, year]);

  return (
    <li id={`idol-year-${year}`} className={styles.idolYear}>
      <div className={styles.title} title={`${year}년에 데뷔한 아이돌 수는 ${idols.length}개`}>
        {year}
      </div>
      {yearDesc && <div className={styles.desc}>{yearDesc}</div>}

      <ul className={cx(styles.idols, `grid-${year}`)}>
        {idols.map((idol, i) => {
          return (
            <IdolCard key={`${idol.name}-${idol.debutYear}`} idol={idol} sort={sort} i={i} yearLength={idols.length} />
          );
        })}
      </ul>
    </li>
  );
};

export default IdolYear;
