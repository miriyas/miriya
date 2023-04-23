import { useMount } from 'react-use';
import { atom, useAtom } from 'jotai';
import { signOut, User } from 'firebase/auth';
import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

import { auth } from '@/utils/db';
import { getRoleApi } from '@/services/auth';
import { ROLE } from '@/types/auth.d';

export const currentUserAtom = atom<User | null>(null);

const useAuth = () => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);

  const currentUserId = auth.currentUser?.uid ?? 'uid';

  const { data: role = ROLE.USER } = useQuery(
    ['getRoleApi'],
    async () => {
      return currentUser?.getIdToken().then((token) => {
        return getRoleApi(token).then((res) => res.data);
      });
    },
    {
      enabled: !!currentUser,
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  useMount(async () => {
    auth.onAuthStateChanged((u) => {
      setCurrentUser(u);
    });
  });

  const isMine = useCallback(
    (authorId: string) => {
      return currentUserId === authorId;
    },
    [currentUserId],
  );

  const logOut = () => {
    signOut(auth);
  };

  return {
    user: currentUser,
    logOut,
    isAdmin: role === ROLE.ADMIN,
    isSupporter: role === ROLE.SUPPORTER,
    isMine,
  };
};

export default useAuth;
