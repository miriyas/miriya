import { useQuery } from '@tanstack/react-query';
import { groupBy } from 'lodash';
import { useMemo } from 'react';

import { getCamerasDataApi } from '@/services/cameras';

const useCameras = () => {
  const { data: cameras = [], refetch } = useQuery(
    ['getCamerasDataApi'],
    () => {
      return getCamerasDataApi().then((res) => res.data);
    },
    {
      suspense: true,
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  const years = useMemo(() => {
    return groupBy(cameras, 'year');
  }, [cameras]);

  const reload = () => {
    refetch();
  };

  return {
    cameras,
    years,
    reload,
  };
};

export default useCameras;
