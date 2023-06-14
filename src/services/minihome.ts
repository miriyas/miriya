import { apiBe } from '@/services';
import { Comment } from '@/types/comments.d';
import { GADataRow, Guestbook, GuestbookData, NewGuestbook, RightCategory } from '@/types/minihome.d';

export const getGAdataAPI = () => apiBe<GADataRow[]>('/minihome/counter');

export const getMinihomeLeftCommentsDataAPI = () => apiBe<Comment[]>('/minihome/leftComments');

export const getMinihomRightCounterDataAPI = () => apiBe<RightCategory>('/minihome/rightCounter');

export const getGuestbookDataAPI = (nextCursor?: string) => {
  const searchParams = new URLSearchParams();
  if (nextCursor) searchParams.set('nextCursor', nextCursor);
  return apiBe<GuestbookData>(`/minihome/guestbook?${searchParams}`);
};

export const getMinihomeCommentDataAPI = (category: string, limitCount: number) =>
  apiBe<Comment[]>('/minihome/comments', { params: { category, limitCount } });

export const postGuestbookAPI = (guestbook: NewGuestbook) => apiBe.post('/minihome/guestbook', guestbook);

export const patchGuestbookAPI = (guestbook: Partial<Guestbook>) => apiBe.patch('/minihome/guestbook', guestbook);

export const deleteGuestbookAPI = (guestbookId: string, uid: string) =>
  apiBe.delete('/minihome/guestbook', { params: { guestbookId, uid } });
