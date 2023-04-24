import apiClient from '@/services/apiClient';
import { Comment, NewComment, SubTargetCategoryTypes, TargetCategoryTypes } from '@/types/comments.d';

interface GetCommentsParams {
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId?: string;
}

export const getCommentsApi = ({ targetCategory, targetSubCategory, targetId }: GetCommentsParams) =>
  apiClient<Comment[]>(
    `/comments?targetCategory=${targetCategory}&targetSubCategory=${targetSubCategory}&targetId=${targetId}`,
  );

export const postCommentAPI = (params: NewComment) => apiClient.post('/comments', params);

export const patchCommentAPI = (comment: Partial<Comment>) => apiClient.patch('/comments', comment);

export const deleteCommentAPI = (commentId: string) => apiClient.delete(`/comments?commentId=${commentId}`);
