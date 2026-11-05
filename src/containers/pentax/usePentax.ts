import { useSuspenseQuery } from '@tanstack/react-query';

import { getPentaxDslrDataApi, getPentaxSlrDataApi } from '@/services/pentaxes';

const usePentax = () => {
  const { data: dslrs = [], refetch: reloadDslr } = useSuspenseQuery({
    queryKey: ['getPentaxDslrDataApi'],
    queryFn: () => getPentaxDslrDataApi().then((res) => res.data),
  });

  const { data: slrs = [], refetch: reloadSlr } = useSuspenseQuery({
    queryKey: ['getPentaxSlrDataApi'],
    queryFn: () => getPentaxSlrDataApi().then((res) => res.data),
  });

  return {
    dslrs,
    reloadDslr,
    slrs,
    reloadSlr,
  };
};

export default usePentax;
