import { useCallback } from 'react';
import { atom, useAtom } from 'jotai';
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { atomWithReset, useResetAtom } from 'jotai/utils';

import { auth } from '@/utils/firebase';
import { LogInWithEmailAndPasswordErrors, SignUpWithEmailAndPasswordErrors } from '@/utils/firebaseError';

export const logInLoadingAtom = atom(false);

export const logInErrorAtom = atomWithReset('');

export const signUpLoadingAtom = atom(false);

export const signUpErrorAtom = atomWithReset('');

const useAuthEmail = () => {
  const [logInLoading, setLogInLoading] = useAtom(logInLoadingAtom);
  const [logInError, setLogInError] = useAtom(logInErrorAtom);
  const resetLogInError = useResetAtom(logInErrorAtom);

  const [signUpLoading, setSignUpLoading] = useAtom(signUpLoadingAtom);
  const [signUpError, setSignUpError] = useAtom(signUpErrorAtom);
  const resetSignUpError = useResetAtom(signUpErrorAtom);

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

  const cleanUp = () => {
    resetLogInError();
    resetSignUpError();
  };

  return {
    signUpEmail,
    logInEmail,
    logInLoading,
    signUpLoading,
    logInError,
    signUpError,
    cleanUp,
  };
};

export default useAuthEmail;
