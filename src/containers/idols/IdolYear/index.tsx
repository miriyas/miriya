'use client';

import { MutableRefObject, useCallback, useEffect, useMemo } from 'react';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import { useResponsive } from '@/hooks/useResponsive';
import type { IsotopeOptions } from 'isotope-layout';
import { ROLE } from '@/types/auth.d';
import { FBIdolType, IsotopesType } from '@/types/idols.d';
import Isotope from '@/libs/isotope-layout';

import IdolNew from './IdolCard/Editor/New';
import IdolCard from './IdolCard';
import styles from './IdolYear.module.scss';

interface Props {
  idols: FBIdolType[];
  year: number;
  isotopes: MutableRefObject<IsotopesType>;
  yearDesc: string;
  yearStart: number;
}

const IdolYear = (props: Props) => {
  const { idols, isotopes, year, yearDesc, yearStart } = props;

  const { user } = useAuth();
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

  const showNew = user && (user.role === ROLE.ADMIN || user.role === ROLE.SUPPORTER) && yearStart === year;

  return (
    <li id={`idol-year-${year}`} className={styles.idolYear}>
      <div className={styles.title} title={`${year}년에 데뷔한 아이돌 수는 ${idols.length}개`}>
        {year}
      </div>
      {yearDesc && <div className={styles.desc}>{yearDesc}</div>}

      <ul className={cx(styles.idols, `grid-${year}`)}>
        {showNew && <IdolNew year={year} />}
        {idols.map((idol) => {
          return <IdolCard key={`${idol.name}-${idol.debutYear}`} idol={idol} sort={sort} />;
        })}
      </ul>
    </li>
  );
};

export default IdolYear;
