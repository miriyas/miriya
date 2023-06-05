import { apiBe } from '@/services';
import { Comment, NewComment, SubTargetCategoryTypes, TargetCategoryTypes } from '@/types/comments.d';

interface GetCommentsParams {
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId?: string;
}

export const getCommentsApi = ({ targetCategory, targetSubCategory, targetId }: GetCommentsParams) =>
  apiBe<Comment[]>('/comments', { params: { targetCategory, targetSubCategory, targetId } });

export const postCommentAPI = (params: NewComment) => apiBe.post('/comments', params);

export const patchCommentAPI = (comment: Partial<Comment>) => apiBe.patch('/comments', comment);

export const deleteCommentAPI = (commentId: string) => apiBe.delete('/comments', { params: { commentId } });
