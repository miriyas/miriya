import { MouseEventHandler } from 'react';
import { useMount } from 'react-use';
import { useAtom } from 'jotai';
import cx from 'clsx';
import Link from 'next/link';

import { FBMyCar } from '@/types/mycar.d';
import { currentCarAtom } from '@/containers/mycar/states';

import styles from './Top.module.scss';

interface Props {
  cars: FBMyCar[];
}

const Top = ({ cars }: Props) => {
  const [currentCar, setCurrentCar] = useAtom(currentCarAtom);

  useMount(() => {
    setCurrentCar(cars[0].vin);
  });

  const onClickSelectCar: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCurrentCar(e.currentTarget.dataset.vin ?? '');
  };

  const onClickNew = () => {
    console.log(111);
  };

  const targetCar = cars.find((car) => car.vin === currentCar) || cars[0];

  return (
    <div className={styles.top}>
      <ul className={styles.carSelect}>
        {cars.map((car) => (
          <li key={car.vin}>
            <button
              type='button'
              onClick={onClickSelectCar}
              data-vin={car.vin}
              className={cx({ [styles.current]: car.vin === targetCar.vin })}
            >
              {car.name}
            </button>
          </li>
        ))}
      </ul>
      <Link href='/mycar/new' onClick={onClickNew} className={styles.newBtn}>
        내 차 추가하기
      </Link>
    </div>
  );
};

export default Top;
