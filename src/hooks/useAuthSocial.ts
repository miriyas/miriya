import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { signInWithPopup } from 'firebase/auth';
import { atomWithReset, useResetAtom } from 'jotai/utils';

import useAuth from '@/hooks/useAuth';
import { auth, PROVIDERS } from '@/utils/db';
import { postIdTokenApi } from '@/services/auth';

import useAuthModal from '@/components/Auth/useAuthModal';

export const socialErrorAtom = atomWithReset('');

const useAuthSocial = () => {
  const { getMe } = useAuth();
  const { onClose } = useAuthModal();
  const [socialError, setSocialError] = useAtom(socialErrorAtom);
  const resetSocialError = useResetAtom(socialErrorAtom);

  const logInWithSocial = useCallback(
    (provider: 'google' | 'facebook' | 'github') => {
      signInWithPopup(auth, PROVIDERS[provider])
        .then((res) => {
          return res.user.getIdToken().then((idToken) => {
            return postIdTokenApi(idToken);
          });
        })
        .then(() => {
          auth.signOut(); // 쿠키를 사용할 것이기 때문에 휘발시킨다.
          onClose();
        })
        .catch((error) => {
          setSocialError(error.code);
        })
        .finally(() => {
          getMe();
        });
    },
    [getMe, onClose, setSocialError],
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
