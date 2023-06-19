import { useCallback } from 'react';
import { useAtom } from 'jotai';

import useAuth from './useAuth';
import { Alert, alertState } from '@/states/alert';

const useAlert = () => {
  const { isAdmin, isSupporter, user } = useAuth();
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

  const limitLengthAlert = (limit: number, content: string) => {
    return new Promise((resolve) => {
      if (content.length > limit) {
        addAlert({ message: '너무 긴데요.. 영세 사이트에 테러하지 마세요ㅠㅠ' });
      } else {
        resolve(null);
      }
    });
  };

  const deleteWarningAlert = () => {
    return new Promise((resolve) => {
      addAlert({
        message: '정말 삭제하시겠습니까?',
        onConfirm: () => resolve(null),
      });
    });
  };

  const alertUserOnly = (callback: () => void) => {
    if (!user) {
      addAlert({ message: '미안, 구경 잘 했어? 로그인 하고 돌아오자.' });
      return;
    }
    callback();
  };

  const alertSupporterOnly = (callback: () => void) => {
    if (isAdmin || isSupporter) {
      callback();
      return;
    }
    if (!user) {
      addAlert({ message: '미안, 구경 잘 했어? 로그인 하고 돌아오자.' });
      return;
    }
    if (!isSupporter) {
      addAlert({
        message: '서포터로 등록된 사람만 쓸 수 있는 기능이야.\n이준혁에게 메시지를 보내보자.',
      });
    }
  };

  return {
    alert,
    addAlert,
    limitLengthAlert,
    deleteWarningAlert,
    removeAlert,
    alertUserOnly,
    alertSupporterOnly,
  };
};

export default useAlert;
