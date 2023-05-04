'use client';

import { MouseEventHandler, useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import cx from 'clsx';

import { FBMyCar } from '@/types/mycar.d';
import { currentCarAtom } from './states';

import Top from './Top';
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

  return (
    <div className={styles.wrapper}>
      <Top cars={cars} />
      <div className={styles.header}>
        <div className={styles.texts}>
          <p className={styles.title}>{targetCar.name}</p>
          <p className={styles.line}>
            {targetCar.maker} {targetCar.lineup}
          </p>
          <p className={styles.vin}>{targetCar.vin}</p>
          <p className={styles.owner}>{targetCar.owner}</p>
        </div>
        <Image src={`/images/mycar/${targetCar.vin}.jpg`} width={800} height={450} alt='' className={styles.hero} />
      </div>
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
        {currentTab === 'fix' && (
          <table>
            <tbody>
              {targetCar.listFix.map((item) => {
                return (
                  <tr key={`${item.time}-${item.title}`}>
                    <th>
                      <time>{item.time}</time>
                      <p>{item.km.toLocaleString()}km</p>
                    </th>
                    <td>{item.location}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {currentTab === 'parts' && (
          <table>
            <tbody>
              {targetCar.listParts?.map((item) => {
                return (
                  <tr key={`${item.name}-${item.partsNo}`}>
                    <th>{item.name}</th>
                    <td>{item.partsNo}</td>
                    <td>{item.price?.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyCarPage;
