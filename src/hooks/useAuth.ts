import { useCallback } from 'react';
import { useMount } from 'react-use';
import { useAtom } from 'jotai';
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signOut as signOutFB,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

import { auth } from '@/utils/firebase';
import { userAtom, logInLoadingAtom, logInErrorAtom, signUpLoadingAtom, signUpErrorAtom } from '@/states/auth';
import { LogInWithEmailAndPasswordErrors, SignUpWithEmailAndPasswordErrors } from '@/utils/firebaseError';

const useAuth = () => {
  const [user, setUser] = useAtom(userAtom);

  const [logInLoading, setLogInLoading] = useAtom(logInLoadingAtom);
  const [logInError, setLogInError] = useAtom(logInErrorAtom);

  const [signUpLoading, setSignUpLoading] = useAtom(signUpLoadingAtom);
  const [signUpError, setSignUpError] = useAtom(signUpErrorAtom);

  useMount(() => {
    auth.onAuthStateChanged((u) => {
      setUser(u);
    });
  });

  const signUpEmail = useCallback(
    async (email: string, password: string) => {
      setSignUpLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .catch((err) => {
          if (err instanceof FirebaseError) {
            setSignUpError(SignUpWithEmailAndPasswordErrors[err.code]);
          } else {
            setSignUpError(err.code);
          }
        })
        .finally(() => {
          setSignUpLoading(false);
        });
    },
    [setSignUpError, setSignUpLoading],
  );

  const logInEmail = useCallback(
    async (email: string, password: string) => {
      setLogInLoading(true);
      setPersistence(auth, browserLocalPersistence).then(() => {
        return signInWithEmailAndPassword(auth, email, password)
          .catch((err) => {
            if (err instanceof FirebaseError) {
              setLogInError(LogInWithEmailAndPasswordErrors[err.code]);
            } else {
              setLogInError(err.code);
            }
          })
          .finally(() => {
            setLogInLoading(false);
          });
      });
    },
    [setLogInError, setLogInLoading],
  );

  const signOut = () => {
    signOutFB(auth);
  };

  return {
    user,
    signUpEmail,
    logInEmail,
    signOut,
    logInLoading,
    signUpLoading,
    logInError,
    signUpError,
  };
};

export default useAuth;
