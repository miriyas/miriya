import { useMount } from 'react-use';
import { atom, useAtom } from 'jotai';
import { signOut, User } from 'firebase/auth';
import { useCallback, useMemo } from 'react';

import { auth } from '@/utils/firebase';
import { getAdminUsers } from '@/services/auth';
import { UserWithRole } from '@/types/auth.d';

export const currentUserAtom = atom<User | null>(null);
export const adminUsersAtom = atom<UserWithRole[]>([]);

const useAuth = () => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const [adminUsers, setAdminUsers] = useAtom(adminUsersAtom);

  useMount(async () => {
    auth.onAuthStateChanged((u) => {
      setCurrentUser(u);
    });
    setAdminUsers(await getAdminUsers());
  });

  const currentUserId = auth.currentUser?.uid;

  const isAdmin = useMemo(() => {
    return adminUsers.filter((admin) => admin.uid === currentUserId);
  }, [adminUsers, currentUserId]);

  const isAuthor = useCallback(
    (uid: string) => {
      return uid === currentUserId;
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
    isAuthor,
  };
};

export default useAuth;
