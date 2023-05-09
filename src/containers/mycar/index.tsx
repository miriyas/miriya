'use client';

import { MouseEventHandler, useEffect, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import cx from 'clsx';
import Link from 'next/link';

import useMyCar from './useMyCar';
import { currentCarAtom, metricKmAtom } from './states';
import useAuth from '@/hooks/useAuth';

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

interface Props {
  carId?: string;
}

const MyCarPage = ({ carId }: Props) => {
  const { user } = useAuth();
  const currentCar = useAtomValue(currentCarAtom);
  const [currentTab, setCurrentTab] = useState(TABS[0].key);
  const [metricKm, setMetricKm] = useAtom(metricKmAtom);

  const { cars, isCarsLoading } = useMyCar();

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

  if (isCarsLoading) {
    return (
      <div className={cx(styles.wrapper, styles.loading)}>
        <Loading />
      </div>
    );
  }

  if (!targetCar) {
    return (
      <div className={styles.wrapper}>
        <Top cars={cars} />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Top cars={cars} carId={carId} />
      <div className={styles.headerWrapper}>
        <HeroHeader
          imageUrl={`${process.env.NEXT_PUBLIC_CDN_URL}/${targetCar.imageUrl}`}
          name={targetCar.name}
          vin={targetCar.vin}
          maker={targetCar.maker}
          lineup={targetCar.lineup}
          owner={targetCar.author.nickname}
        />
        {user?.uid === targetCar.authorId && (
          <Link href={`/mycar/${carId}/edit`} className={styles.editButton}>
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
      </div>
    </div>
  );
};

export default MyCarPage;
