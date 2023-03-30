import { atom } from 'jotai';

import { PENTAX_DSLRS } from '@/constants/pentaxes';

export const selectedCameraAtom = atom<string>(PENTAX_DSLRS[0].name);
