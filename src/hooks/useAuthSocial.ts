import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { signInWithPopup } from 'firebase/auth';
import { atomWithReset } from 'jotai/utils';

import { auth, providerGoogle } from '@/utils/firebase';

export const socialErrorAtom = atomWithReset('');

const useAuthSocial = () => {
  const [socialError, setSocialError] = useAtom(socialErrorAtom);

  const logInGoogle = useCallback(() => {
    signInWithPopup(auth, providerGoogle).catch((error) => {
      setSocialError(error.code);
    });
  }, [setSocialError]);

  return {
    logInGoogle,
    socialError,
  };
};

export default useAuthSocial;
