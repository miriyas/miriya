'use client';

import { useCallback, useEffect } from 'react';

import useAlert from '@/hooks/useAlert';
import useAuth from '@/hooks/useAuth';

import AlertPortal from './portal';
import View from './View';
import styles from './index.module.scss';

interface AxiosErrorDetail {
  message?: string;
}

export const Alert = () => {
  const { alert, addAlert } = useAlert();
  const { logOut } = useAuth();

  const handleAxiosError = useCallback(
    (event: CustomEvent<AxiosErrorDetail>) => {
      if (!event.detail) return;
      const { message = '' } = event.detail;
      if (message === 'Unauthorized') {
        addAlert({ message: '권한이 없습니다.' });
      } else if (message === 'Forbidden') {
        addAlert({ message: '다시 로그인해주세요.', onConfirm: logOut });
      } else if (message === 'Bad Request') {
        addAlert({ message: '잘못된 요청입니다.' });
      } else {
        addAlert({ message });
      }
    },
    [addAlert, logOut],
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
