import { apiBe } from '@/services';
import { Like, NewLike, LikeTargetCategoryTypes } from '@/types/likes.d';

interface LikeParams {
  targetCategory: LikeTargetCategoryTypes;
  targetId?: string;
}

export const getLikesApi = ({ targetCategory, targetId }: LikeParams) =>
  apiBe<Like[]>('/likes', { params: { targetCategory, targetId } });

export const postLikeAPI = (params: NewLike) => apiBe.post('/likes', params);

export const deleteLikeAPI = ({ targetCategory, targetId }: LikeParams) =>
  apiBe.delete('/likes', { params: { targetCategory, targetId } });
