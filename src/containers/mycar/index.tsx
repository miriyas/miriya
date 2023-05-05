'use client';

import { MouseEventHandler, useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';
import cx from 'clsx';

import { FBMyCar } from '@/types/mycar.d';
import { currentCarAtom } from './states';

import Top from './Top';
import HeroHeader from './HeroHeader';
import ListFix from './ListFix';
import ListParts from './ListParts';
import styles from './index.module.scss';

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

interface Props {
  cars: FBMyCar[];
}

const MyCarPage = ({ cars }: Props) => {
  const currentCar = useAtomValue(currentCarAtom);
  const [currentTab, setCurrentTab] = useState(TABS[0].key);

  useEffect(() => {
    setCurrentTab(TABS[0].key);
  }, [currentCar]);

  const onClickSelecTab: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCurrentTab(e.currentTarget.dataset.tb ?? '');
  };

  const targetCar = cars.find((car) => car.vin === currentCar) || cars[0];

  if (!targetCar)
    return (
      <div className={styles.wrapper}>
        <Top cars={cars} />
      </div>
    );

  return (
    <div className={styles.wrapper}>
      <Top cars={cars} />
      <HeroHeader
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
        {currentTab === 'fix' && <ListFix list={targetCar.listFix} />}
        {currentTab === 'parts' && <ListParts list={targetCar.listParts} />}
      </div>
    </div>
  );
};

export default MyCarPage;
