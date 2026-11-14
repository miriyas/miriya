'use client';

import { MouseEventHandler, useState, useTransition } from 'react';
import cx from 'clsx';
import { Dictionary } from 'lodash';
import { useAtomValue } from 'jotai';

import { useGA } from '@/hooks/useGA';
import { CAMERA } from '@/constants/ga';
import { CameraType } from '@/types/cameras';
import { getNumberArr } from '@/utils';
import { selectedMakerAtom } from '../states';

import styles from './index.module.scss';

interface Props {
  yearStart: number;
  yearEnd: number;
  years: Dictionary<CameraType[]>;
}

const Top = ({ yearStart, yearEnd, years }: Props) => {
  const { gaEvent } = useGA();
  const [, startTransition] = useTransition();

  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const selectedMaker = useAtomValue(selectedMakerAtom);

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
      {getNumberArr(yearEnd - yearStart + 1).map((n) => {
        const year = yearStart + n;
        // Only years that have a camera of the selected maker.
        const has = years[String(year)]?.some((c) => selectedMaker === 'ALL' || c.maker === selectedMaker);
        if (!has) return null;
        return (
          <li key={year} className={cx({ [styles.current]: year === currentYear })}>
            <button
              type='button'
              onClick={onClickYear}
              title={String(year)}
            >
              {year}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Top;
