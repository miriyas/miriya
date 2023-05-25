import apiClient from '@/services/apiClient';
import { SubTargetCategoryTypes, TargetCategoryTypes } from '@/types/comments';
import { History } from '@/types/histories.d';

interface GetHistoriesParams {
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId?: string;
}

export const getHistoriesApi = ({ targetCategory, targetSubCategory, targetId }: GetHistoriesParams) =>
  apiClient<History[]>('/histories', { params: { targetCategory, targetSubCategory, targetId } });
