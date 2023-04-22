import { useMount } from 'react-use';
import { atom, useAtom } from 'jotai';
import { signOut, User } from 'firebase/auth';
import { useCallback, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { auth } from '@/utils/db';
import { UserWithRole } from '@/types/auth.d';
import { getAdminUsersApi, getSupportersApi } from '@/services/auth';

export const currentUserAtom = atom<User | null>(null);
export const adminUsersAtom = atom<UserWithRole[]>([]);
export const supporterUsersAtom = atom<UserWithRole[]>([]);

const useAuth = () => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);

  const { data: adminUsers = [] } = useQuery(
    ['getAdminUsersApi'],
    () => {
      return getAdminUsersApi().then((res) => res.data);
    },
    {
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  const { data: supporterUsers = [] } = useQuery(
    ['getSupportersApi'],
    () => {
      return getSupportersApi().then((res) => res.data);
    },
    {
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  useMount(async () => {
    auth.onAuthStateChanged((u) => {
      setCurrentUser(u);
    });
  });

  const currentUserId = auth.currentUser?.uid;

  const isAdmin = useMemo(() => {
    return !!adminUsers.find((admin) => admin.uid === currentUserId);
  }, [adminUsers, currentUserId]);

  const isSupporter = useMemo(() => {
    return !!supporterUsers.find((admin) => admin.uid === currentUserId);
  }, [supporterUsers, currentUserId]);

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
    isAdmin,
    isSupporter,
    isMine,
  };
};

export default useAuth;
