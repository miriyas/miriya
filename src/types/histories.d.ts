import { SubTargetCategoryTypes, TargetCategoryTypes } from '@/types/comments';

import { FbTimeStamp } from './firebase.d';

export interface NewHistory {
  body: string;
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId?: string;
  targetName?: string;
}

export interface History {
  id: string;
  body: string;
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId?: string;
  targetName?: string;
  createdAt: FbTimeStamp;
}
