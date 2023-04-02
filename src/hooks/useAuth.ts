import { useCallback } from 'react';
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signOut as signOutFB,
} from 'firebase/auth';
import { useMount } from 'react-use';
import { useAtom } from 'jotai';

import { auth } from '@/utils/firebase';
import { userAtom } from '@/states/auth';

const useAuth = () => {
  const [user, setUser] = useAtom(userAtom);

  useMount(() => {
    auth.onAuthStateChanged((u) => {
      setUser(u);
    });
  });

  const signUpEmail = useCallback(async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
  }, []);

  const signInEmail = useCallback(async (email: string, password: string) => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      return signInWithEmailAndPassword(auth, email, password);
    });
  }, []);

  const signOut = () => {
    signOutFB(auth);
  };

  return {
    user,
    signUpEmail,
    signInEmail,
    signOut,
  };
};

export default useAuth;
