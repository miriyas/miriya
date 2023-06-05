import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { signInWithPopup } from 'firebase/auth';
import { atomWithReset, useResetAtom } from 'jotai/utils';

import useAuth from '@/hooks/useAuth';
import { auth, PROVIDERS } from '@/utils/db';
import { postIdTokenApi } from '@/services/auth';

import useAuthModal from '@/components/Auth/useAuthModal';

export const socialErrorAtom = atomWithReset('');
export const socialLoadingAtom = atomWithReset(false);

const useAuthSocial = () => {
  const { getMe } = useAuth();
  const { onClose } = useAuthModal();
  const [socialError, setSocialError] = useAtom(socialErrorAtom);
  const [socialLoading, setSocialLoading] = useAtom(socialLoadingAtom);
  const resetSocialError = useResetAtom(socialErrorAtom);
  const resetSocialLoading = useResetAtom(socialLoadingAtom);

  const logInWithSocial = useCallback(
    (provider: 'google' | 'facebook' | 'github') => {
      if (socialLoading) return;
      setSocialLoading(true);
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
          setSocialLoading(false);
        });
    },
    [getMe, onClose, setSocialError, setSocialLoading, socialLoading],
  );

  const cleanUpSocialRelatedState = useCallback(() => {
    resetSocialError();
    resetSocialLoading();
  }, [resetSocialError, resetSocialLoading]);

  return {
    logInWithSocial,
    socialLoading,
    socialError,
    cleanUpSocialRelatedState,
  };
};

export default useAuthSocial;
