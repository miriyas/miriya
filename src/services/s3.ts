import { apiBe } from '@/services';

export const uploadImageForBlogAPI = (body: FormData) => apiBe.postForm('/blog/image', body);

export const uploadImageForM2API = (body: FormData) => apiBe.postForm('/m2day/image', body);
