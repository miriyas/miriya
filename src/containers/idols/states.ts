import { atomWithReset } from 'jotai/utils';

export const editIdolAtom = atomWithReset<string | undefined>(undefined);

export const coverIdolAtom = atomWithReset<string | undefined>(undefined);
