import { useCallback } from 'react';
import { atom, useAtom } from 'jotai';
import {
  createUserWithEmailAndPassword,
  inMemoryPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { atomWithReset, useResetAtom } from 'jotai/utils';

import useAuth from '@/hooks/useAuth';
import { auth } from '@/utils/db';
import { LogInWithEmailAndPasswordErrors, SignUpWithEmailAndPasswordErrors } from '@/utils/firebaseError';
import { postIdTokenApi } from '@/services/auth';

import useAuthModal from '@/components/Auth/useAuthModal';

export const logInLoadingAtom = atom(false);

export const logInErrorAtom = atomWithReset('');

export const signUpLoadingAtom = atom(false);

export const signUpErrorAtom = atomWithReset('');

const useAuthEmail = () => {
  const { getMe } = useAuth();
  const { onClose } = useAuthModal();
  const [logInLoading, setLogInLoading] = useAtom(logInLoadingAtom);
  const [logInError, setLogInError] = useAtom(logInErrorAtom);
  const resetLogInError = useResetAtom(logInErrorAtom);

  const [signUpLoading, setSignUpLoading] = useAtom(signUpLoadingAtom);
  const [signUpError, setSignUpError] = useAtom(signUpErrorAtom);
  const resetSignUpError = useResetAtom(signUpErrorAtom);

  const cleanUpEmailRelatedState = useCallback(() => {
    resetLogInError();
    resetSignUpError();
  }, [resetLogInError, resetSignUpError]);

  const logInEmail = useCallback(
    async (email: string, password: string) => {
      setLogInLoading(true);
      setPersistence(auth, inMemoryPersistence); // 쿠키를 사용할 것이기 때문에 휘발시킨다.
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          return res.user.getIdToken().then((idToken) => {
            return postIdTokenApi(idToken);
          });
        })
        .then(() => {
          auth.signOut(); // 쿠키를 사용할 것이기 때문에 휘발시킨다.
          onClose();
          cleanUpEmailRelatedState();
        })
        .catch((err) => {
          if (err instanceof FirebaseError) {
            setLogInError(LogInWithEmailAndPasswordErrors[err.code]);
          } else {
            setLogInError(err.code);
          }
        })
        .finally(() => {
          getMe();
          setLogInLoading(false);
        });
    },
    [cleanUpEmailRelatedState, getMe, onClose, setLogInError, setLogInLoading],
  );

  const signUpEmail = useCallback(
    async (email: string, password: string) => {
      setSignUpLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          logInEmail(email, password);
        })
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
    [logInEmail, setSignUpError, setSignUpLoading],
  );

  return {
    signUpEmail,
    logInEmail,
    logInLoading,
    signUpLoading,
    logInError,
    signUpError,
    cleanUpEmailRelatedState,
  };
};

export default useAuthEmail;
