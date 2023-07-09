import { useQuery } from '@tanstack/react-query';

import { getMyCarDataAPI } from '@/services/mycar';

const useMyCar = () => {
  const { data = [], refetch } = useQuery({
    queryKey: ['getMyCarDataAPI'],
    queryFn: () => getMyCarDataAPI().then((res) => res.data),
    suspense: true,
  });

  return {
    cars: data,
    refetchCars: refetch,
  };
};

export default useMyCar;
