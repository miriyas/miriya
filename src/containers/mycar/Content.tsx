'use client';

import { MouseEventHandler, useEffect, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import cx from 'clsx';
import Link from 'next/link';

import { currentCarAtom, metricKmAtom } from './states';
import useAuth from '@/hooks/useAuth';
import { getCDNImage } from '@/utils/image';
import useMyCar from './useMyCar';

import Top from './Top';
import HeroHeader from './HeroHeader';
import ListFix from './ListFix';
import ListParts from './ListParts';
import ListLinks from './ListLinks';
import styles from './index.module.scss';

export const TABS = [
  {
    key: 'fix',
    label: '정비내역',
  },
  {
    key: 'parts',
    label: '부품목록',
  },
  {
    key: 'links',
    label: '링크목록',
  },
];

interface Props {
  carId?: string;
}

const MyCarContent = ({ carId }: Props) => {
  const { user } = useAuth();
  const { cars } = useMyCar();
  const currentCar = useAtomValue(currentCarAtom);
  const [currentTab, setCurrentTab] = useState(TABS[0].key);
  const [metricKm, setMetricKm] = useAtom(metricKmAtom);

  useEffect(() => {
    setCurrentTab(TABS[0].key);
  }, [currentCar]);

  const onClickSelecTab: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCurrentTab(e.currentTarget.dataset.tb ?? '');
  };

  const targetCar = cars.find((car) => car.id === currentCar) || cars[0];

  const onClickMetric = () => {
    setMetricKm((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <Top cars={cars} carId={carId} />
      <div className={styles.headerWrapper}>
        <HeroHeader
          imageUrl={getCDNImage(targetCar.imageUrl)}
          name={targetCar.name}
          vin={targetCar.vin}
          maker={targetCar.maker}
          lineup={targetCar.lineup}
          owner={targetCar.author.nickname}
        />
        {user?.uid === targetCar.authorId && (
          <Link href={`/mycar/${carId ?? cars[0]?.id}/edit`} className={styles.editButton}>
            수정
          </Link>
        )}
      </div>
      <div className={styles.contents}>
        <div className={styles.tabBar}>
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
          <button type='button' onClick={onClickMetric} className={cx(styles.metric, { [styles.km]: metricKm })}>
            <span className={styles.km}>Km</span> / <span className={styles.miles}>Miles</span>
          </button>
        </div>
        {currentTab === 'fix' && <ListFix car={targetCar} />}
        {currentTab === 'parts' && <ListParts car={targetCar} />}
        {currentTab === 'links' && <ListLinks car={targetCar} />}
      </div>
    </div>
  );
};

export default MyCarContent;
