import { MouseEventHandler, useState, useTransition } from 'react';
import cx from 'clsx';

import { CATEGORIES, Category } from '@/types/idols.d';
import { getNumberArr } from '@/utils';
import { prettyCategory } from '@/utils/idols';
import { useGA } from '@/hooks/useGA';
import { IDOL } from '@/constants/ga';

import Header from './Header';
import styles from './FilterBar.module.scss';

interface Props {
  idolsLength: number;
  yearStart: number;
  yearEnd: number;
}

const FilterBar = (props: Props) => {
  const { idolsLength, yearStart, yearEnd } = props;

  const { gaEvent } = useGA();
  const [, startTransition] = useTransition();
  const [currentCategory, setCurrentCategory] = useState<Category>('total');

  const onClickCategory: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newCategory = e.currentTarget.title;
    startTransition(() => {
      setCurrentCategory(newCategory as Category);
    });
    Object.keys(window.isotopes).forEach((key) => {
      window.isotopes[Number(key)].arrange({
        filter: (elem) => (newCategory === 'total' ? true : elem.classList.value.includes(`category-${newCategory}`)),
      });
    });
    gaEvent(IDOL.IDOL_CATEGORY_CLICK, { category: newCategory });
  };

  const onClickYear: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newYear = e.currentTarget.title;
    document.getElementById(`idol-year-${newYear}`)?.scrollIntoView({ behavior: 'smooth' });
    gaEvent(IDOL.IDOL_YEAR_CLICK, { year: newYear });
  };

  return (
    <div className={styles.filterBar}>
      <Header idolsLength={idolsLength} yearStart={yearStart} yearEnd={yearEnd} />
      <ul className={styles.categories}>
        {CATEGORIES.map((category) => {
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
        {getNumberArr(yearEnd - yearStart + 1).map((n) => {
          const year = yearStart + n;
          return (
            <li key={year}>
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
