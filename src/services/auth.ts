import apiClient, { apiClientLocal } from '@/services/apiClient';
import { UserWithRole } from '@/types/auth.d';

export const postIdTokenApi = (idToken: string) => apiClient.post('/auth/session', { idToken });

export const getMeApiLocal = () => apiClientLocal<UserWithRole>('/auth/session');

export const getMeApi = (cookie: string) =>
  apiClient<UserWithRole>({
    url: '/auth/session',
    method: 'get',
    headers: {
      Cookie: cookie,
    },
  });

export const logoutApi = () => apiClient.delete('/auth/session');
