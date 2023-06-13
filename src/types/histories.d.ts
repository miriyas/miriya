import { TargetCategoryTypes } from '@/types/comments';

export interface NewHistory {
  body: string;
  targetCategory: TargetCategoryTypes;
  targetId?: string;
  targetName?: string;
}

export interface History {
  id: string;
  body: string;
  targetCategory: TargetCategoryTypes;
  targetId?: string;
  targetName?: string;
  createdAt: Date;
}
