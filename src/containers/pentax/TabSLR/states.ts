import { atom } from 'jotai';

import { PENTAX_SLRS } from '@/constants/pentaxes';

export const selectedCameraAtom = atom<string>(PENTAX_SLRS[0].name);
