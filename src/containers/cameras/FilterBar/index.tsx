'use client';

import { MouseEventHandler, useEffect, useState, useTransition } from 'react';
import cx from 'clsx';
import { Dictionary, startCase } from 'lodash';

import useRafAtom from '@/hooks/useRafAtom';
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
  const [, startTransition] = useTransition();

  const [selectedMaker, setSelectedMaker] = useRafAtom(selectedMakerAtom);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialMaker = params.get('maker') ?? 'ALL';
    setSelectedMaker(initialMaker);
  }, [setSelectedMaker]);

  const onClickMaker: MouseEventHandler<HTMLButtonElement> = (e) => {
    setSelectedMaker(e.currentTarget.title);
    // search params가 변경되었을 때 리랜더 되어 언마운트 애니메이션이 불가능해지므로, next/navigation 안쓰고 강제로 soft navigation 사용
    window.history.pushState(null, '', `?maker=${e.currentTarget.title}`);
    gaEvent(CAMERA.CAMERA_MAKER_CLICK, { maker: e.currentTarget.title });
  };

  const onClickYear: MouseEventHandler<HTMLButtonElement> = (e) => {
    const year = e.currentTarget.title;
    startTransition(() => {
      document.getElementById(`camera-year-${year}`)?.scrollIntoView({ behavior: 'smooth' });
      setCurrentYear(Number(year));
    });
    gaEvent(CAMERA.CAMERA_YEAR_CLICK, { year });
  };

  return (
    <div className={styles.filterBar}>
      <Header />
      <ul className={styles.categories}>
        {CAMERA_MAKERS.map((maker) => {
          return (
            <li key={maker} className={cx({ [styles.current]: maker === selectedMaker })}>
              <button type='button' onClick={onClickMaker} title={maker}>
                {startCase(maker)}
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
