import apiClient from '@/services/apiClient';
import { UserWithRole } from '@/types/auth';

export const getAdminUsersApi = () => apiClient<UserWithRole[]>('/auth/adminUsers');

export const getSupportersApi = () => apiClient<UserWithRole[]>('/auth/supporters');
