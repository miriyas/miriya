import { TimeStamp, ValueOf, WithAuthor } from '@/types';

export const TARGET_CATEGORY = {
  GUESTBOOK: 'GUESTBOOK',
  IDOLS: 'IDOLS',
  CAMERA: 'CAMERA',
  PENTAX: 'PENTAX',
  PENTAX_SLR: 'PENTAX_SLR',
  PENTAX_DSLR: 'PENTAX_DSLR',
  PENTAX_LENS: 'PENTAX_LENS',
  PENTAX_LENS645: 'PENTAX_LENS645',
  BLOG: 'BLOG',
} as const;

export type TargetCategoryTypes = ValueOf<typeof TARGET_CATEGORY>;

export interface NewComment {
  body: string;
  hidden?: boolean; // 방명록 전용
  targetCategory: TargetCategoryTypes;
  targetId?: string;
  targetName?: string; // 방명록에서 목록 보여줄 때 쿼리 줄이기 위해 사용함.
  parentId?: string;
}

export interface Comment extends WithAuthor, TimeStamp {
  id: string;
  body: string;
  commentNoInCategory: number;
  targetCategory: TargetCategoryTypes;
  targetId: string;
  targetName?: string;
  hidden?: boolean;
  parentId?: string;
  children?: Comment[];
}
