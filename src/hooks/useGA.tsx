import { useCallback, useMemo } from 'react';
import { debounce } from 'lodash';
import { decamelizeKeys } from 'humps';

import { EventNameTypes, DataType } from '@/constants/ga';

export interface GAProps {
  action: string;
  data?: { [key: string]: unknown };
}

export function useGA() {
  const gaEvent: <T extends EventNameTypes>(eventName: T, data: DataType[T]) => void = useMemo(
    () =>
      debounce((eventName, data = {}) => {
        console.log(window.gtag);

        window.gtag?.('event', eventName, decamelizeKeys(data));
      }, 500),
    [],
  );

  const gaPV = useCallback((pagePath: string) => {
    window.gtag?.('event', 'page_view', { page_path: pagePath });
  }, []);

  return {
    gaEvent,
    gaPV,
  };
}
