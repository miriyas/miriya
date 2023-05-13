import apiClient from '@/services/apiClient';

export const uploadImageAPI = (body: FormData) => apiClient.postForm('/image', body);
