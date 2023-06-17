import { apiBe } from '@/services';
import { M2PostType, NewM2PostType } from '@/types/m2day.d';

export const getM2daysApi = () => apiBe<M2PostType[]>('/m2day');

export const postM2dayAPI = (params: NewM2PostType) => apiBe.post('/m2day', params);

export const patchM2dayAPI = (m2postId: string, data: NewM2PostType) => apiBe.patch(`/m2day/${m2postId}`, { data });

export const deleteM2dayAPI = (m2postId: string) => apiBe.delete(`/m2day/${m2postId}`);
