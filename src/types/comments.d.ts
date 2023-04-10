import { ValueOf } from '@/types';

import { WithAuthor, WithTS } from './firebase.d';

export const TARGET_CATEGORY = {
  GUESTBOOK: 'GUESTBOOK',
  IDOLS: 'IDOLS',
  CAMERA: 'CAMERA',
  PENTAX: 'PENTAX',
} as const;

export type TargetCategoryTypes = ValueOf<typeof TARGET_CATEGORY>;

export const SUB_TARGET_CATEGORY = {
  SLR: 'SLR',
  DSLR: 'DSLR',
  LENS: 'LENS',
  LENS645: 'LENS645',
} as const;

export type SubTargetCategoryTypes = ValueOf<typeof SUB_TARGET_CATEGORY>;

export interface NewComment extends WithAuthor {
  body: string;
  hidden?: boolean; // 방명록 전용
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId?: string; // 방명록일 때는 타겟 없음
}

export interface Comment extends WithAuthor, WithTS {
  id: string;
  body: string;
  commentNoInCategory: number;
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId?: string;
  hidden?: boolean;
}
