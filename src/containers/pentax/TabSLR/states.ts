import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

export const selectedCameraAtom = atom<string>('');

export const editCameraAtom = atomWithReset<string | undefined>(undefined);
