import { atom } from 'jotai';

export const authModalAtom = atom<'login' | 'signup' | undefined>(undefined);

export const showPasswordAtom = atom(true);
