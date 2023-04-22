import { useMount } from 'react-use';
import { atom, useAtom } from 'jotai';
import { signOut, User } from 'firebase/auth';
import { useCallback, useMemo } from 'react';

import { auth } from '@/utils/firebase';
import { UserWithRole } from '@/types/auth.d';

import { getAdminUsers, getSupporters } from '@/app/api/utils';

export const currentUserAtom = atom<User | null>(null);
export const adminUsersAtom = atom<UserWithRole[]>([]);
export const supporterUsersAtom = atom<UserWithRole[]>([]);

const useAuth = () => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const [adminUsers, setAdminUsers] = useAtom(adminUsersAtom);
  const [supporterUsers, setSupporterUsers] = useAtom(supporterUsersAtom);

  useMount(async () => {
    auth.onAuthStateChanged((u) => {
      setCurrentUser(u);
    });
    setAdminUsers(await getAdminUsers());
    setSupporterUsers(await getSupporters());
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
