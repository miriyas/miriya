import { useMount } from 'react-use';
import { useAtom } from 'jotai';
import cx from 'clsx';
import Link from 'next/link';

import { MyCar } from '@/types/mycar.d';
import { currentCarAtom } from '@/containers/mycar/states';

import styles from './Top.module.scss';

// const getTransitionDirection = (routes: { href: string }[], oldHref: string, newHref: string) => {
//   const oldHrefParent = oldHref.split('/')[2];
//   const newHrefParent = newHref.split('/')[2];
//   if (!oldHrefParent) return 'frontTransition';
//   if (oldHref.includes(newHref)) return 'baseTransition';

//   const oldRoute = routes.find((r) => r.href.includes(oldHrefParent));
//   const newRoute = routes.find((r) => r.href.includes(newHrefParent));
//   if (!oldRoute || !newRoute) return 'baseTransition';

//   const oldIndex = routes.indexOf(oldRoute);
//   const newIndex = routes.indexOf(newRoute);
//   return oldIndex > newIndex ? 'backTransition' : 'frontTransition';
// };

interface Props {
  carId?: string;
  cars: MyCar[];
}

const Top = ({ carId, cars }: Props) => {
  // const router = useRouter();
  const [currentCar, setCurrentCar] = useAtom(currentCarAtom);

  useMount(() => {
    setCurrentCar(carId ?? cars[0]?.id);
  });

  const targetCar = cars.find((car) => car.id === currentCar) || cars[0];

  // const viewNavigate: MouseEventHandler<HTMLAnchorElement> = (e) => {
  //   e.preventDefault();

  //   const routes = cars.map((car) => ({
  //     href: `/mycar/${car.id}`,
  //   }));

  //   const oldHref = window.location.href.replace(window.location.origin, '');
  //   const newHref = e.currentTarget.href.replace(window.location.origin, '');
  //   const transitionDirection = getTransitionDirection(routes, oldHref, newHref);
  //   document.documentElement.classList.add(transitionDirection);
  //   transitionHelper(() => {
  //     flushSync(() => {
  //       router.push(newHref);
  //     });
  //   }).finished.finally(() => {
  //     document.documentElement.classList.remove('baseTransition', 'backTransition', 'frontTransition');
  //   });
  // };

  return (
    <div className={styles.top}>
      <ul className={styles.carSelect}>
        {cars.map((car) => (
          <li key={car.id}>
            <Link
              href={`/mycar/${car.id}`}
              className={cx({ [styles.current]: car.id === targetCar.id })}
              // onClick={viewNavigate}
            >
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
