import { apiBe } from '@/services';

export const uploadImageAPI = (body: FormData) => apiBe.postForm('/image', body);
