import { useQuery } from '@tanstack/react-query';

import { getPentaxDslrDataApi, getPentaxSlrDataApi } from '@/services/pentaxes';

const usePentax = () => {
  const { data: dslrs = [], refetch: reloadDslr } = useQuery(
    ['getPentaxDslrDataApi'],
    () => {
      return getPentaxDslrDataApi().then((res) => res.data);
    },
    {
      suspense: true,
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  const { data: slrs = [], refetch: reloadSlr } = useQuery(
    ['getPentaxSlrDataApi'],
    () => {
      return getPentaxSlrDataApi().then((res) => res.data);
    },
    {
      suspense: true,
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  return {
    dslrs,
    reloadDslr,
    slrs,
    reloadSlr,
  };
};

export default usePentax;
