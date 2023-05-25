import apiClient from '@/services/apiClient';
import { Comment, NewComment } from '@/types/comments.d';
import { GADataRow } from '@/types/minihome.d';

export const getGAdataAPI = () => apiClient<GADataRow[]>('https://us-central1-miriyas.cloudfunctions.net/getGAdata');

export const getMinihomeLeftCommentsDataAPI = (limitCount: number) =>
  apiClient<Comment[]>('/minihome/leftComments', { params: { limitCount } });

export const getMinihomRightCounterDataAPI = (category: string) =>
  apiClient<{
    today: number;
    total: number;
  }>('/minihome/rightCounter', { params: { category } });

export const getGuestbookDataAPI = () => apiClient<Comment[]>('/minihome/guestbook');

export const getMinihomeCommentDataAPI = (category: string, limitCount: number) =>
  apiClient<Comment[]>('/minihome/comments', { params: { category, limitCount } });

export const postGuestbookAPI = (comment: NewComment) => apiClient.post('/minihome/guestbook', comment);

export const patchGuestbookAPI = (comment: Partial<Comment>) => apiClient.patch('/minihome/guestbook', comment);

export const deleteGuestbookAPI = (commentId: string, uid: string) =>
  apiClient.delete('/minihome/guestbook', { params: { commentId, uid } });
