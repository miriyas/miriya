'use client';

import { useCallback, useEffect } from 'react';
import cx from 'clsx';

import { useResponsive } from '@/hooks/useResponsive';
import { FBIdolType } from '@/types/idols.d';
import Isotope from '@/libs/isotope-layout';
import { getIsotopeOptions } from '@/utils/idols';

import IdolCard from './IdolCard';
import styles from './IdolYear.module.scss';

interface Props {
  idols: FBIdolType[];
  year: number;
  yearDesc: string;
}

if (typeof window !== 'undefined' && !window.isotopes) {
  window.isotopes = {};
}

const IdolYear = (props: Props) => {
  const { idols, year, yearDesc } = props;

  const { isMobile } = useResponsive();

  useEffect(() => {
    const elem = document.querySelector<HTMLElement>(`.grid-${year}`);
    if (!elem) return;

    window.isotopes[year] = new Isotope(elem, getIsotopeOptions(year, isMobile));
  }, [isMobile, year, idols.length]);

  const sort = useCallback(() => {
    setTimeout(() => {
      window.isotopes[year].arrange(getIsotopeOptions(year, isMobile));
    }, 100); // NOTE: covers transition duration
  }, [isMobile, year]);

  return (
    <li id={`idol-year-${year}`} className={styles.idolYear}>
      <div className={styles.title} title={`${year}년에 데뷔한 아이돌 수는 ${idols.length}개`}>
        {year}
      </div>
      {yearDesc && (
        <div className={styles.desc}>
          {year}년에는 무슨 일이?
          <br />
          {yearDesc}
        </div>
      )}
      <ul className={cx(styles.idols, `grid-${year}`)}>
        {idols.map((idol) => {
          return <IdolCard key={`${idol.name}-${idol.debutYear}`} idol={idol} sort={sort} />;
        })}
      </ul>
    </li>
  );
};

export default IdolYear;
