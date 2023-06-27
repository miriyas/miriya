import { ValueOf } from '@/types.d';

export const TRANSITIONS = {
  _: '',
  M2_ALBUM: 'transition-m2-album',
  IMAGE_EXPANDABLE: 'image-expandable', // 기본값
} as const;

export type TransitionTypes = ValueOf<typeof TRANSITIONS>;
