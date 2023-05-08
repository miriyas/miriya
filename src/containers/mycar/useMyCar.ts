import { useQuery } from '@tanstack/react-query';

import { getMyCarDataAPI } from '@/services/mycar';

const useMyCar = () => {
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery(['getMyCarDataAPI'], () => getMyCarDataAPI().then((res) => res.data));

  return {
    cars: data,
    isCarsLoading: isLoading,
    refetchCars: refetch,
  };
};

export default useMyCar;
