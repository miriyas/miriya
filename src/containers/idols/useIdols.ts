import { useQuery } from '@tanstack/react-query';

import { getIdolsDataApi } from '@/services/idols';

const useIdols = () => {
  const { data: idols = [], refetch: refetchIdols } = useQuery({
    queryKey: ['getIdolsDataApi'],
    queryFn: () => getIdolsDataApi().then((res) => res.data),
  });

  return {
    idols,
    refetchIdols,
  };
};

export default useIdols;
