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
    },
  );

  const { data: slrs = [], refetch: reloadSlr } = useQuery(
    ['getPentaxSlrDataApi'],
    () => {
      return getPentaxSlrDataApi().then((res) => res.data);
    },
    {
      suspense: true,
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
