'use client';

import useAlert from '@/hooks/useAlert';

import AlertPortal from './portal';
import View from './View';
import styles from './index.module.scss';

export const Alert = () => {
  const { alert } = useAlert();

  if (!alert) return null;

  return (
    <AlertPortal>
      <div className={styles.alertWrapper}>
        <View alert={alert} />
      </div>
    </AlertPortal>
  );
};
