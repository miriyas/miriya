import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { signInWithPopup } from 'firebase/auth';
import { atomWithReset, useResetAtom } from 'jotai/utils';

import { auth, PROVIDERS } from '@/utils/db';

export const socialErrorAtom = atomWithReset('');

const useAuthSocial = () => {
  const [socialError, setSocialError] = useAtom(socialErrorAtom);
  const resetSocialError = useResetAtom(socialErrorAtom);

  const logInWithSocial = useCallback(
    (provider: 'google' | 'facebook' | 'github') => {
      signInWithPopup(auth, PROVIDERS[provider]).catch((error) => {
        setSocialError(error.code);
      });
    },
    [setSocialError],
  );

  const cleanUpSocialRelatedState = useCallback(() => {
    resetSocialError();
  }, [resetSocialError]);

  return {
    logInWithSocial,
    socialError,
    cleanUpSocialRelatedState,
  };
};

export default useAuthSocial;
