import { useQuery } from '@tanstack/react-query';

import { getPentaxDslrDataApi, getPentaxSlrDataApi } from '@/services/pentaxes';

const usePentax = () => {
  const { data: dslrs = [], refetch: reloadDslr } = useQuery({
    queryKey: ['getPentaxDslrDataApi'],
    queryFn: () => getPentaxDslrDataApi().then((res) => res.data),
    suspense: true,
  });

  const { data: slrs = [], refetch: reloadSlr } = useQuery({
    queryKey: ['getPentaxSlrDataApi'],
    queryFn: () => getPentaxSlrDataApi().then((res) => res.data),
    suspense: true,
  });

  return {
    dslrs,
    reloadDslr,
    slrs,
    reloadSlr,
  };
};

export default usePentax;
