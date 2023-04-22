import apiClient from '@/services/apiClient';
import { SubTargetCategoryTypes, TargetCategoryTypes } from '@/types/comments';
import { History, NewHistory } from '@/types/histories.d';

interface GetHistoriesParams {
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId: string;
}

export const getHistoriesApi = ({ targetCategory, targetSubCategory, targetId }: GetHistoriesParams) =>
  apiClient<History[]>(
    `/histories?targetCategory=${targetCategory}&targetSubCategory=${targetSubCategory}&targetId=${targetId}`,
  );

export const deleteGuestbookAPI = (commentId: string, uid: string) =>
  apiClient.delete(`/minihome/guestbook?commentId=${commentId}&uid=${uid}`);

export const postHistoryAPI = (params: NewHistory) => apiClient.post('/histories', params);
