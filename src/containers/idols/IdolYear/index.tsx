'use client';

import { useCallback, useEffect } from 'react';
import cx from 'clsx';
import { useStore } from 'jotai';

import { useResponsive } from '@/hooks/useResponsive';
import { Idol } from '@/types/idols';
import Isotope from '@/libs/isotope-layout';
import { categoryFilter, getIsotopeOptions } from '@/utils/idols';
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
  // Read the category without subscribing: a filter click must not re-render every year.
  const store = useStore();

  const { isMobile } = useResponsive();

  // Create the layout only when the cards or the screen type change. Before, currentCategory was
  // a dependency, so every filter click made a new Isotope per year (and never destroyed the old one):
  // the layout ran twice per click, and the number of instances grew with every click.
  useEffect(() => {
    const elem = document.querySelector<HTMLElement>(`.grid-${year}`);
    if (!elem) return undefined;

    const isotope = new Isotope(elem, getIsotopeOptions(year, isMobile));
    window.isotopes[year] = isotope;
    // A year that loads later starts with the current category. After that, FilterBar
    // applies category changes with arrange (arrangeCategory), not with a new instance.
    isotope.arrange({ filter: categoryFilter(store.get(currentCategoryAtom)) });

    return () => {
      isotope.destroy();
      if (window.isotopes[year] === isotope) delete window.isotopes[year];
    };
  }, [isMobile, year, idols.length, store]);

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
