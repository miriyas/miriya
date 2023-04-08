import { TargetCategoryTypes } from '@/types/comments';

import { FbTimeStamp } from './firebase.d';

export interface NewHistory {
  body: string;
  targetCategory: TargetCategoryTypes;
  targetId?: string;
}

export interface History {
  id: string;
  body: string;
  targetCategory: TargetCategoryTypes;
  targetId?: string;
  createdAt: FbTimeStamp;
}
