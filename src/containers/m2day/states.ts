import { atomWithReset } from 'jotai/utils';

export const editModeAtom = atomWithReset<string | undefined>(undefined);

export const editContentAtom = atomWithReset<string>('');
