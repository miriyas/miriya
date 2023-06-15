'use client';

import { useCallback, useEffect } from 'react';
import cx from 'clsx';
import { useAtomValue } from 'jotai';

import { useResponsive } from '@/hooks/useResponsive';
import { Idol } from '@/types/idols.d';
import Isotope from '@/libs/isotope-layout';
import { getIsotopeOptions } from '@/utils/idols';
import { currentCategoryAtom } from '@/containers/idols/states';

import IdolCard from './IdolCard';
import styles from './IdolYear.module.scss';

interface Props {
  idols: Idol[];
  year: number;
  yearDesc: string;
}

if (typeof window !== 'undefined' && !window.isotopes) {
  window.isotopes = {};
}

const IdolYear = (props: Props) => {
  const { idols, year, yearDesc } = props;
  const currentCategory = useAtomValue(currentCategoryAtom);

  const { isMobile } = useResponsive();

  useEffect(() => {
    const elem = document.querySelector<HTMLElement>(`.grid-${year}`);
    if (!elem) return;

    window.isotopes[year] = new Isotope(elem, getIsotopeOptions(year, isMobile));
    window.isotopes[year].arrange({
      filter: (el) => (currentCategory === 'total' ? true : el.classList.value.includes(`category-${currentCategory}`)),
    });
  }, [isMobile, year, idols.length, currentCategory]);

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
