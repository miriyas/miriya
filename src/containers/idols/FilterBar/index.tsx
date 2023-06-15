'use client';

import { MouseEventHandler, useTransition } from 'react';
import cx from 'clsx';
import { useAtom } from 'jotai';

import { CATEGORIES, Category } from '@/types/idols.d';
import { prettyCategory } from '@/utils/idols';
import { useGA } from '@/hooks/useGA';
import { IDOL } from '@/constants/ga';
import { currentCategoryAtom } from '@/containers/idols/states';

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
  const [currentCategory, setCurrentCategory] = useAtom(currentCategoryAtom);

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
    </div>
  );
};

export default FilterBar;
