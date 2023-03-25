'use client';

import { MouseEventHandler, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import cx from 'clsx';
import { Dictionary, startCase } from 'lodash';
import { useAtom } from 'jotai';

import { useGA } from '@/hooks/useGA';
import { CAMERA } from '@/constants/ga';
import { YEAR_INFO } from '@/constants/cameras';
import { CameraType, CAMERA_MAKERS } from '@/types/cameras.d';
import { getNumberArr } from '@/utils';
import { selectedMakerAtom } from '../states';

import Header from './Header';
import styles from './FilterBar.module.scss';

interface Props {
  years: Dictionary<CameraType[]>;
}

const FilterBar = ({ years }: Props) => {
  const { gaEvent } = useGA();
  const pathname = usePathname();
  const query = useSearchParams(); // 상위에 반드시 Suspense로 묶지 않으면 위로 타고 올라가며 Next SSR 전부 깨짐.

  const [selectedMaker, setSelectedMaker] = useAtom(selectedMakerAtom);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    const freshMaker = query.get('maker');
    if (freshMaker && freshMaker !== selectedMaker) {
      setSelectedMaker(freshMaker);
    }
  }, [selectedMaker, query, setSelectedMaker]);

  const onClickMaker: MouseEventHandler<HTMLAnchorElement> = (e) => {
    gaEvent(CAMERA.CAMERA_MAKER_CLICK, { maker: e.currentTarget.title });
  };

  const onClickYear: MouseEventHandler<HTMLButtonElement> = (e) => {
    const year = e.currentTarget.title;
    document.getElementById(`camera-year-${year}`)?.scrollIntoView({ behavior: 'smooth' });
    setCurrentYear(Number(year));
    gaEvent(CAMERA.CAMERA_YEAR_CLICK, { year });
  };

  return (
    <div className={styles.filterBar}>
      <Header />
      <ul className={styles.categories}>
        {CAMERA_MAKERS.map((maker) => {
          return (
            <li key={maker} className={cx({ [styles.current]: maker === selectedMaker })}>
              <Link href={{ pathname, query: { maker } }} onClick={onClickMaker} title={maker} rel='nofollow'>
                {startCase(maker)}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className={styles.years}>
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
    </div>
  );
};

export default FilterBar;
