'use client';

import { useCallback, useEffect } from 'react';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import { useResponsive } from '@/hooks/useResponsive';
import { ROLE } from '@/types/auth.d';
import { FBIdolType } from '@/types/idols.d';
import Isotope from '@/libs/isotope-layout';
import { getIsotopeOptions } from '@/utils/idols';

import IdolNew from './IdolCard/Editor/New';
import IdolCard from './IdolCard';
import styles from './IdolYear.module.scss';

interface Props {
  idols: FBIdolType[];
  year: number;
  yearDesc: string;
}

const IdolYear = (props: Props) => {
  const { idols, year, yearDesc } = props;

  const { user } = useAuth();
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

  const showNew = user && (user.role === ROLE.ADMIN || user.role === ROLE.SUPPORTER);

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
        {showNew && <IdolNew year={year} />}
        {idols.map((idol) => {
          return <IdolCard key={`${idol.name}-${idol.debutYear}`} idol={idol} sort={sort} />;
        })}
      </ul>
    </li>
  );
};

export default IdolYear;
