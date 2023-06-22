import { ValueOf } from '@/types.d';

export const TRANSITIONS = {
  _: '',
  TEST: 'transition-test',
  IMAGE_EXPANDABLE: 'transition-image-expandable',
  M2_ALBUM: 'transition-m2-album',
} as const;

export type TransitionTypes = ValueOf<typeof TRANSITIONS>;
