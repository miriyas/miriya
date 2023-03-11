import { MouseEventHandler, MutableRefObject, useState } from 'react';
import cx from 'classnames';
import { CATEGORIES, IIsotopes, prettyCategory, TCategory } from '@/types';

import styles from './FilterBar.module.scss';
import { getNumberArr } from '@/utils';

interface Props {
  isotopes: MutableRefObject<IIsotopes>;
}

const FilterBar = (props: Props) => {
  const { isotopes } = props;

  const [currentCategory, setCurrentCategory] = useState<TCategory>('total');
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  const onClickCategory: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newCategory = e.currentTarget.title;
    setCurrentCategory(newCategory as TCategory);
    Object.keys(isotopes.current).map((key) => {
      isotopes.current[Number(key)].arrange({
        filter: (elem) => elem.classList.value.includes(`category-${newCategory}`),
      });
    });
  };

  const onClickYear: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newYear = e.currentTarget.title;
    setCurrentYear(Number(newYear));

    const target = document.querySelector<HTMLLIElement>(`#idol-year-${newYear}`);

    window.scrollTo({
      top: target?.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.filterBar}>
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
