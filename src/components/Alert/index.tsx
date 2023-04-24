'use client';

import { useCallback, useEffect } from 'react';

import useAlert from '@/hooks/useAlert';

import AlertPortal from './portal';
import View from './View';
import styles from './index.module.scss';

interface AxiosErrorDetail {
  message?: string;
}

export const Alert = () => {
  const { alert, addAlert } = useAlert();

  const handleAxiosError = useCallback(
    (event: CustomEvent<AxiosErrorDetail>) => {
      if (!event.detail) return;
      const { message = '' } = event.detail;
      if (message === 'Unauthorized') {
        addAlert({ message: '권한이 없습니다.' });
      } else {
        addAlert({ message });
      }
    },
    [addAlert],
  );

  useEffect(() => {
    window.addEventListener('axiosError', handleAxiosError as () => void);
    return (): void => {
      window.removeEventListener('axiosError', handleAxiosError as () => void);
    };
  }, [handleAxiosError]);

  if (!alert) return null;

  return (
    <AlertPortal>
      <div className={styles.alertWrapper}>
        <View alert={alert} />
      </div>
    </AlertPortal>
  );
};
