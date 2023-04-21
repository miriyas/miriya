import { useQuery } from '@tanstack/react-query';
import { groupBy } from 'lodash';
import { useMemo } from 'react';

import { getIdolsDataApi, getIdolYearsDataApi } from '@/services/idols';

const useIdols = () => {
  const { data: idols = [], refetch } = useQuery(
    ['getIdolsDataApi'],
    () => {
      return getIdolsDataApi().then((res) => res.data);
    },
    {
      suspense: true,
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  const debutYears = useMemo(() => groupBy(idols, 'debutYear'), [idols]);

  const yearStart = useMemo(() => Math.min(...Object.keys(debutYears).map((year) => Number(year))), [debutYears]);

  const yearEnd = useMemo(() => Math.max(...Object.keys(debutYears).map((year) => Number(year))), [debutYears]);

  const { data: years = [] } = useQuery(
    ['getIdolYearsDataApi'],
    () => {
      return getIdolYearsDataApi().then((res) => res.data);
    },
    {
      suspense: true,
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  const reload = () => {
    refetch();
  };

  return {
    idols,
    debutYears,
    years,
    yearStart,
    yearEnd,
    reload,
  };
};

export default useIdols;
