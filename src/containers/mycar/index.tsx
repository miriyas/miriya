'use client';

import { MouseEventHandler, useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';
import cx from 'clsx';
import { useQuery } from '@tanstack/react-query';

import { currentCarAtom } from './states';
import { getMyCarDataAPI } from '@/services/mycar';

import Top from './Top';
import HeroHeader from './HeroHeader';
import ListFix from './ListFix';
import ListParts from './ListParts';
import styles from './index.module.scss';
import Loading from '@/components/Loading';

const TABS = [
  {
    key: 'fix',
    label: '정비내역',
  },
  {
    key: 'parts',
    label: '부품목록',
  },
];

const MyCarPage = () => {
  const currentCar = useAtomValue(currentCarAtom);
  const [currentTab, setCurrentTab] = useState(TABS[0].key);

  const { data = [], isLoading } = useQuery(['getMyCarDataAPI'], () => getMyCarDataAPI().then((res) => res.data));

  useEffect(() => {
    setCurrentTab(TABS[0].key);
  }, [currentCar]);

  const onClickSelecTab: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCurrentTab(e.currentTarget.dataset.tb ?? '');
  };

  const targetCar = data.find((car) => car.vin === currentCar) || data[0];

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <Loading small />
      </div>
    );
  }

  if (!targetCar) {
    return (
      <div className={styles.wrapper}>
        <Top cars={data} />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Top cars={data} />
      <HeroHeader
        carId={targetCar.id}
        name={targetCar.name}
        vin={targetCar.vin}
        maker={targetCar.maker}
        lineup={targetCar.lineup}
        owner={targetCar.author.nickname}
      />
      <div className={styles.contents}>
        <ul className={styles.tableSelect}>
          {TABS.map((tb) => (
            <li key={tb.key}>
              <button
                type='button'
                onClick={onClickSelecTab}
                data-tb={tb.key}
                className={cx({ [styles.current]: tb.key === currentTab })}
              >
                {tb.label}
              </button>
            </li>
          ))}
        </ul>
        {currentTab === 'fix' && <ListFix car={targetCar} />}
        {currentTab === 'parts' && <ListParts car={targetCar} />}
      </div>
    </div>
  );
};

export default MyCarPage;
