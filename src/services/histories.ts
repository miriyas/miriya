import { apiBe } from '@/services';
import { History } from '@/types/histories';

interface GetHistoriesParams {
  targetCategory: string;
  targetId?: string;
}

export const getHistoriesApi = ({ targetCategory, targetId }: GetHistoriesParams) =>
  apiBe<History[]>('/histories', { params: { targetCategory, targetId } });
