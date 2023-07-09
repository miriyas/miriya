import 'client-only';
import { useCallback, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';

import { authModalAtom } from '@/components/Auth/states';
import { getMeApiLocal, logoutApi } from '@/services/auth';
import { ROLE } from '@/types/auth.d';

const useAuth = () => {
  const setAuthModal = useSetAtom(authModalAtom);
  const [logOutLoading, setLogOutLoading] = useState(false);

  const {
    data: currentUser = null,
    refetch,
    isLoading: isLoadingMe,
  } = useQuery({
    queryKey: ['getMeApiLocal'],
    queryFn: () =>
      getMeApiLocal()
        .then((res) => res.data)
        .catch(() => {
          return null;
        }),
    retry: 0,
  });

  const isAdmin = useMemo(() => currentUser?.role === ROLE.ADMIN, [currentUser?.role]);

  const isSupporter = useMemo(() => currentUser?.role === ROLE.SUPPORTER, [currentUser?.role]);

  const isMine = useCallback(
    (authorId: string) => {
      return currentUser?.uid === authorId;
    },
    [currentUser],
  );

  const isMineOrAdmin = useCallback(
    (authorId: string) => {
      return isAdmin || isMine(authorId);
    },
    [isAdmin, isMine],
  );

  const getMe = () => {
    refetch();
  };

  const logOut = () => {
    setLogOutLoading(true);
    logoutApi()
      .then(() => {
        getMe();
      })
      .finally(() => {
        setLogOutLoading(false);
      });
  };

  const showLoginModalWhenLoggedOut = (callback?: () => void) => {
    if (!currentUser) {
      setAuthModal('login');
      return;
    }
    callback?.();
  };

  return {
    user: currentUser,
    logOut,
    logOutLoading,
    isAdmin,
    isSupporter,
    isMine,
    isMineOrAdmin,
    isLoadingMe,
    getMe,
    showLoginModalWhenLoggedOut,
  };
};

export default useAuth;
