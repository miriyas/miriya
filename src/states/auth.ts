import { User } from 'firebase/auth';
import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

export const userAtom = atom<User | null>(null);

export const logInLoadingAtom = atom(false);

export const logInErrorAtom = atomWithReset('');

export const signUpLoadingAtom = atom(false);

export const signUpErrorAtom = atomWithReset('');
