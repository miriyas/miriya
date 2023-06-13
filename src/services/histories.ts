import { apiBe } from '@/services';
import { TargetCategoryTypes } from '@/types/comments.d';
import { History } from '@/types/histories.d';

interface GetHistoriesParams {
  targetCategory: TargetCategoryTypes;
  targetId?: string;
}

export const getHistoriesApi = ({ targetCategory, targetId }: GetHistoriesParams) =>
  apiBe<History[]>('/histories', { params: { targetCategory, targetId } });
