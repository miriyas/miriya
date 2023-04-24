import apiClient from '@/services/apiClient';
import { UserWithRole } from '@/types/auth.d';

export const postIdTokenApi = (idToken: string) => apiClient.post('/auth/session', { idToken });

export const getMeApi = () => apiClient<UserWithRole>('/auth/session');

export const logoutApi = () => apiClient.delete('/auth/session');
