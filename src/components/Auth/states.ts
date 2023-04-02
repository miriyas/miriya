import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

export const authModalAtom = atomWithReset<'login' | 'signup' | undefined>(undefined);

export const showPasswordAtom = atom(true);
