import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          staleTime: 30 * 1000,
          cacheTime: 6 * 1000,
        },
      },
    }),
);

export default getQueryClient;
