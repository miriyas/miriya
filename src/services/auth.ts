import { apiBe, apiFe } from '@/services';
import { UserWithRole } from '@/types/auth.d';

export const postIdTokenApi = (idToken: string) => apiBe.post('/auth/session', { idToken });

export const getMeApiLocal = () => apiFe<UserWithRole>('/auth/session');

export const getMeApi = (cookie: string) =>
  apiBe<UserWithRole>({
    url: '/auth/session',
    method: 'get',
    headers: {
      Cookie: cookie,
    },
  });

export const logoutApi = () => apiBe.delete('/auth/session');
