import { useMount } from 'react-use';
import { useAtom } from 'jotai';
import cx from 'clsx';
import Link from 'next/link';

import { FBMyCar } from '@/types/mycar.d';
import { currentCarAtom } from '@/containers/mycar/states';

import styles from './Top.module.scss';

interface Props {
  carId?: string;
  cars: FBMyCar[];
}

const Top = ({ carId, cars }: Props) => {
  const [currentCar, setCurrentCar] = useAtom(currentCarAtom);

  useMount(() => {
    setCurrentCar(carId ?? cars[0]?.id);
  });

  const targetCar = cars.find((car) => car.id === currentCar) || cars[0];

  return (
    <div className={styles.top}>
      <ul className={styles.carSelect}>
        {cars.map((car) => (
          <li key={car.id}>
            <Link href={`/mycar/${car.id}`} className={cx({ [styles.current]: car.id === targetCar.id })}>
              {car.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href='/mycar/new' className={styles.newBtn}>
        내 차 추가하기
      </Link>
    </div>
  );
};

export default Top;
