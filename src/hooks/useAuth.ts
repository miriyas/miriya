import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getMeApi, logoutApi } from '@/services/auth';
import { ROLE } from '@/types/auth.d';

const useAuth = () => {
  const { data: currentUser = null, refetch } = useQuery(
    ['getMeApi'],
    () =>
      getMeApi()
        .then((res) => res.data)
        .catch(() => {
          return null;
        }),
    {
      cacheTime: 6 * 1000,
      refetchOnMount: false,
      retry: 0,
    },
  );

  const isMine = useCallback(
    (authorId: string) => {
      return currentUser?.uid === authorId;
    },
    [currentUser],
  );

  const getMe = () => {
    refetch();
  };

  const logOut = () => {
    logoutApi().then(() => {
      getMe();
    });
  };

  return {
    user: currentUser,
    logOut,
    isAdmin: currentUser?.role === ROLE.ADMIN,
    isSupporter: currentUser?.role === ROLE.SUPPORTER,
    isMine,
    getMe,
  };
};

export default useAuth;
