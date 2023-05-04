import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

export const currentCarAtom = atomWithReset<string | undefined>(undefined);

export const showPasswordAtom = atom(true);
