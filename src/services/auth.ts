import apiClient from '@/services/apiClient';
import { RoleTypes } from '@/types/auth.d';

export const getRoleApi = (token: string) => apiClient<RoleTypes>(`/auth/role?token=${token}`);
