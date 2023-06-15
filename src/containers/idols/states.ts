import { atomWithReset } from 'jotai/utils';

import { Category } from '@/types/idols';

export const showIdolEndAtom = atomWithReset<number>(1);

export const currentCategoryAtom = atomWithReset<Category>('total');

export const editIdolAtom = atomWithReset<string | undefined>(undefined);

export const coverIdolAtom = atomWithReset<string | undefined>(undefined);
