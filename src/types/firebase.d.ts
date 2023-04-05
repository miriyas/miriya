import { ValueOf } from '@/types';

export interface FbTimeStamp {
  nanoseconds: number;
  seconds: number;
}

export const COLLECTION = {
  IDOLS: 'idolsPage',
  CAMERAS: 'camerasPage',
  PENTAXES: 'pentaxesPage',
  COMMENTS: 'comments',
  USERS: 'users',
} as const;

export type CollectionTypes = ValueOf<typeof COLLECTION>;
