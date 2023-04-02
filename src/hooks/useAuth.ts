import { useMount } from 'react-use';
import { atom, useAtom } from 'jotai';
import { signOut, User } from 'firebase/auth';

import { auth } from '@/utils/firebase';

export const currentUserAtom = atom<User | null>(null);

const useAuth = () => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);

  useMount(() => {
    auth.onAuthStateChanged((u) => {
      setCurrentUser(u);
    });
  });

  const logOut = () => {
    signOut(auth);
  };

  return {
    user: currentUser,
    logOut,
  };
};

export default useAuth;
