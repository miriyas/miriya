import { ValueOf } from '@/types';

import { WithAuthor, WithAuthorAndTS } from './firebase.d';

export const TARGET_CATEGORY = {
  GUESTBOOK: 'GUESTBOOK',
  IDOLS: 'IDOLS',
  CAMERA: 'CAMERA',
  PENTAX: 'PENTAX',
} as const;

export type TargetCategoryTypes = ValueOf<typeof TARGET_CATEGORY>;

export interface NewComment extends WithAuthor {
  body: string;
  hidden?: boolean; // 방명록 전용
  targetCategory: TargetCategoryTypes;
  targetId?: string; // 방명록일 때는 타겟 없음
}

export interface Comment extends WithAuthorAndTS {
  id: string;
  body: string;
  commentNoInCategory: number;
  targetCategory: TargetCategoryTypes;
  targetId?: string;
  hidden?: boolean;
}
