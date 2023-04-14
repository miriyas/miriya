'use client';

import { MouseEventHandler, useState, useTransition } from 'react';
import cx from 'clsx';
import { Dictionary } from 'lodash';

import { useGA } from '@/hooks/useGA';
import { CAMERA } from '@/constants/ga';
import { YEAR_INFO } from '@/constants/cameras';
import { CameraType } from '@/types/cameras.d';
import { getNumberArr } from '@/utils';

import styles from './index.module.scss';

interface Props {
  years: Dictionary<CameraType[]>;
}

const FilterBar = ({ years }: Props) => {
  const { gaEvent } = useGA();
  const [, startTransition] = useTransition();

  const [currentYear, setCurrentYear] = useState<number | null>(null);

  const onClickYear: MouseEventHandler<HTMLButtonElement> = (e) => {
    const year = e.currentTarget.title;
    startTransition(() => {
      document.getElementById(`camera-year-${year}`)?.scrollIntoView({ behavior: 'smooth' });
      setCurrentYear(Number(year));
    });
    gaEvent(CAMERA.CAMERA_YEAR_CLICK, { year });
  };

  return (
    <ul className={cx(styles.commonBox, styles.years)}>
      {getNumberArr(YEAR_INFO.end - YEAR_INFO.start + 1).map((n) => {
        const year = YEAR_INFO.start + n;
        return (
          <li key={year} className={cx({ [styles.current]: year === currentYear })}>
            <button
              type='button'
              onClick={onClickYear}
              title={String(year)}
              disabled={!Object.keys(years).includes(String(year))}
            >
              {year}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterBar;
