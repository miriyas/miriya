import { atomWithReset } from 'jotai/utils';

export const titleAtom = atomWithReset<string>('');

export const bodyAtom = atomWithReset<string>('**Hello world!!!**');

export const categoryAtom = atomWithReset<string>('');

export const heroAtom = atomWithReset<string>('');

export const hiddenAtom = atomWithReset<boolean>(false);

export const loadingAtom = atomWithReset<boolean>(false);
