import { ValueOf } from '@/types';

export interface FbTimeStamp {
  nanoseconds: number;
  seconds: number;
}

export const COLLECTION = {
  COMMENTS: 'comments',
  HISTORIES: 'histories',
  USERS: 'users',
  //
  IDOLS: 'idolsPage',
  CAMERAS: 'camerasPage',
  PENTAXES: 'pentaxesPage',
} as const;

export type CollectionTypes = ValueOf<typeof COLLECTION>;

export const IDOL_COLLECTION_NAMES = {
  IDOLS: 'idols',
  IDOL_YEARS: 'idolYears',
} as const;

export const PENTAX_COLLECTION_NAMES = {
  DSLR: 'dslr',
  SLR: 'slr',
  LENS: 'lens',
  LENS645: 'lens645',
} as const;

export interface WithAuthor {
  authorId: string;
  author: {
    nickname?: string;
    nicknameIsFake?: boolean;
    profileUrl?: string;
  };
}

export interface WithTS {
  createdAt: FbTimeStamp;
  updatedAt: FbTimeStamp;
  deletedAt: FbTimeStamp;
}
