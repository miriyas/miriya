'use client';

import { useQuery } from '@tanstack/react-query';

import useAuth from '@/hooks/useAuth';
import { getCarFixDataAPI } from '@/services/mycar';
import { MyCar } from '@/types/mycar.d';

import Loading from '@/components/Loading';
import New from './New';
import ListFixItem from './Item';
import styles from '../List.module.scss';

interface Props {
  car: MyCar;
}

const ListFix = ({ car }: Props) => {
  const { user, isAdmin } = useAuth();

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['getCarFixDataAPI', car.id],
    queryFn: () => getCarFixDataAPI(car.id).then((res) => res.data),
  });

  return (
    <div className={styles.listWrapper}>
      {user && (user.uid === car.authorId || isAdmin) && <New carId={car.id} refetch={refetch} />}
      <ul className={styles.list}>
        {isLoading && (
          <li>
            <div className={styles.blank}>
              <Loading small />
            </div>
          </li>
        )}
        {!isLoading && (!data || data.length === 0) && (
          <li>
            <div className={styles.blank}>내역을 추가해주세요.</div>
          </li>
        )}
        {data?.map((item) => (
          <ListFixItem key={item.id} item={item} refetch={refetch} carOwnerId={car.authorId} />
        ))}
      </ul>
    </div>
  );
};

export default ListFix;
