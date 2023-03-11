import { MouseEventHandler, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import cx from 'classnames';
import { IIdol, prettyCategory, TCategory } from '@/types';
import Isotope from '@/libs/isotope-layout';
import type { IsotopeOptions } from 'isotope-layout';
import { CATEGORIES } from '@/types';

import Idol from '@/components/Idol';
import styles from './FilterBar.module.scss';
import { YEARS } from '@/constants';
import { getNumberArr } from '@/utils';

// interface Props {
//   idols: IIdol[];
//   year: number;
// }

const FilterBar = () => {
  // const { idols, year } = props;
  // const isotope = useRef<Isotope | null>();

  const [currentCategory, setCurrentCategory] = useState<TCategory>('total');
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  const onClickCategory: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCurrentCategory(e.currentTarget.title as TCategory);
  };

  const onClickYear: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCurrentYear(Number(e.currentTarget.title));
  };

  return (
    <div className={styles.filterBar}>
      <ul className={styles.categories}>
        {CATEGORIES.map((category) => {
          console.log(category, currentCategory);

          return (
            <li key={category} className={cx({ [styles.current]: category === currentCategory })}>
              <button type='button' onClick={onClickCategory} title={category}>
                {prettyCategory(category)}
              </button>
            </li>
          );
        })}
      </ul>
      <ul className={styles.years}>
        {getNumberArr(24).map((n) => {
          const year = 1996 + n;
          return (
            <li key={year} className={cx({ [styles.current]: year === currentYear })}>
              <button type='button' onClick={onClickYear} title={String(year)}>
                {year}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterBar;
