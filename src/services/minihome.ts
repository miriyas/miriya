import { apiBe } from '@/services';
import { Comment, NewComment } from '@/types/comments.d';
import { GADataRow, Guestbook } from '@/types/minihome.d';

export const getGAdataAPI = () => apiBe<GADataRow[]>('/minihome/counter');

export const getMinihomeLeftCommentsDataAPI = () => apiBe<Comment[]>('/minihome/leftComments');

export const getMinihomRightCounterDataAPI = (category: string) =>
  apiBe<{
    today: number;
    total: number;
  }>('/minihome/rightCounter', { params: { category } });

export const getGuestbookDataAPI = (nextCursor?: string) => {
  const searchParams = new URLSearchParams();
  if (nextCursor) searchParams.set('nextCursor', nextCursor);
  return apiBe<Guestbook>(`/minihome/guestbook?${searchParams}`);
};

export const getMinihomeCommentDataAPI = (category: string, limitCount: number) =>
  apiBe<Comment[]>('/minihome/comments', { params: { category, limitCount } });

export const postGuestbookAPI = (comment: NewComment) => apiBe.post('/minihome/guestbook', comment);

export const patchGuestbookAPI = (comment: Partial<Comment>) => apiBe.patch('/minihome/guestbook', comment);

export const deleteGuestbookAPI = (commentId: string, uid: string) =>
  apiBe.delete('/minihome/guestbook', { params: { commentId, uid } });
