import { useCallback } from 'react';
import { useAtom } from 'jotai';

import { Alert, alertState } from '@/states/alert';

const useAlert = () => {
  const [alert, setAlert] = useAtom(alertState);

  const addAlert = useCallback(
    (newAlert: Alert) => {
      if (!newAlert) return;
      setAlert(newAlert);
    },
    [setAlert],
  );

  const removeAlert = useCallback(() => {
    setAlert(undefined);
  }, [setAlert]);

  return {
    alert,
    addAlert,
    removeAlert,
  };
};

export default useAlert;
