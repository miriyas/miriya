import { useCallback } from 'react';
import { atom, useAtomValue } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

import { authModalAtom } from '@/components/Auth/states';

export const logInLoadingAtom = atom(false);

export const logInErrorAtom = atomWithReset('');

export const signUpLoadingAtom = atom(false);

export const signUpErrorAtom = atomWithReset('');

const useAuthModal = () => {
  const authModal = useAtomValue(authModalAtom);
  const resetAuthModal = useResetAtom(authModalAtom);

  const onClose = useCallback(() => {
    resetAuthModal();
  }, [resetAuthModal]);

  return {
    onClose,
    authModal,
  };
};

export default useAuthModal;
