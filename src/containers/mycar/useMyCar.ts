import { useSuspenseQuery } from '@tanstack/react-query';

import { getMyCarDataAPI } from '@/services/mycar';

const useMyCar = () => {
  const { data = [], refetch } = useSuspenseQuery({
    queryKey: ['getMyCarDataAPI'],
    queryFn: () => getMyCarDataAPI().then((res) => res.data),
  });

  return {
    cars: data,
    refetchCars: refetch,
  };
};

export default useMyCar;
