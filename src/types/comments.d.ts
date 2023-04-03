import { ValueOf } from '@/types';

export const TARGET_CATEGORY = {
  GUESTBOOK: 'GUESTBOOK',
  IDOLS: 'IDOLS',
  CAMERA: 'CAMERA',
  PENTAX: 'PENTAX',
} as const;

export type TargetCategoryTypes = ValueOf<typeof TARGET_CATEGORY>;

export interface NewComment {
  authorId: string;
  author: {
    nickname?: string;
    nicknameIsFake?: boolean;
    profileUrl?: string;
  };
  body: string;
  targetCategory: TargetCategoryTypes;
  targetId?: string;
}

export interface Comment {
  id: string;
  authorId: string;
  author: {
    nickname?: string;
    nicknameIsFake?: boolean;
    profileUrl?: string;
  };
  body: string;
  targetCategory: TargetCategoryTypes;
  targetId?: string;
  hidden?: boolean;
  createdAt?: {
    nanoseconds: number;
    seconds: number;
  };
}
