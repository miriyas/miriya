import { apiBe } from '@/services';
import { Comment, NewComment, TargetCategoryTypes } from '@/types/comments.d';

interface GetCommentsParams {
  targetCategory: TargetCategoryTypes;
  targetId?: string;
}

export const getCommentsApi = ({ targetCategory, targetId }: GetCommentsParams) =>
  apiBe<Comment[]>('/comments', { params: { targetCategory, targetId } });

export const postCommentAPI = (params: NewComment) => apiBe.post('/comments', params);

export const patchCommentAPI = (comment: Partial<Comment>) => apiBe.patch('/comments', comment);

export const deleteCommentAPI = (commentId: string) => apiBe.delete('/comments', { params: { commentId } });
