import { atomWithReset } from 'jotai/utils';

import { GuestbookTabTypes, GUESTBOOK_TAB } from '@/types/guestbook.d';

export const tabAtom = atomWithReset<GuestbookTabTypes>(GUESTBOOK_TAB.HOME);
