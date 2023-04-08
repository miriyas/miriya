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

export interface WithAuthor {
  authorId: string;
  author: {
    nickname?: string;
    nicknameIsFake?: boolean;
    profileUrl?: string;
  };
}

export interface WithAuthorAndTS {
  authorId: string;
  author: {
    nickname?: string;
    nicknameIsFake?: boolean;
    profileUrl?: string;
  };
  createdAt: FbTimeStamp;
  updatedAt: FbTimeStamp;
  deletedAt: FbTimeStamp;
}
