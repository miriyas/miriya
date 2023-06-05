import { apiBe } from '@/services';
import { SubTargetCategoryTypes, TargetCategoryTypes } from '@/types/comments.d';
import { History } from '@/types/histories.d';

interface GetHistoriesParams {
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId?: string;
}

export const getHistoriesApi = ({ targetCategory, targetSubCategory, targetId }: GetHistoriesParams) =>
  apiBe<History[]>('/histories', { params: { targetCategory, targetSubCategory, targetId } });
