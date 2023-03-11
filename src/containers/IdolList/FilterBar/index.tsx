import { MouseEventHandler, MutableRefObject, useState } from 'react';
import cx from 'classnames';

import { YEAR_INFO } from '@/constants';
import { CATEGORIES, IIsotopes, TCategory } from '@/types/idols.d';
import { getNumberArr } from '@/utils';
import { prettyCategory } from '@/utils/idols';
import { useGA } from '@/hooks/useGA';
import { IDOL } from '@/constants/ga';

import Header from './Header';
import styles from './FilterBar.module.scss';

interface Props {
  isotopes: MutableRefObject<IIsotopes>;
}

const FilterBar = (props: Props) => {
  const { isotopes } = props;

  const { gaEvent } = useGA();
  const [currentCategory, setCurrentCategory] = useState<TCategory>('total');
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  const onClickCategory: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newCategory = e.currentTarget.title;
    setCurrentCategory(newCategory as TCategory);
    Object.keys(isotopes.current).forEach((key) => {
      isotopes.current[Number(key)].arrange({
        filter: (elem) => elem.classList.value.includes(`category-${newCategory}`),
      });
    });
    gaEvent(IDOL.IDOL_CATEGORY_CLICK, { category: newCategory });
  };

  const onClickYear: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newYear = e.currentTarget.title;
    setCurrentYear(Number(newYear));

    const target = document.querySelector<HTMLLIElement>(`#idol-year-${newYear}`);

    window.scrollTo({
      top: target?.offsetTop,
      behavior: 'smooth',
    });
    gaEvent(IDOL.IDOL_YEAR_CLICK, { year: newYear });
  };

  return (
    <div className={styles.filterBar}>
      <Header />
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
        {getNumberArr(YEAR_INFO.end - YEAR_INFO.start + 1).map((n) => {
          const year = YEAR_INFO.start + n;
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
