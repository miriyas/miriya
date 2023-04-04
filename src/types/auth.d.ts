import { ValueOf } from '@/types';

export const ROLE = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  BLOCKED: 'BLOCKED',
} as const;

export type RoleTypes = ValueOf<typeof ROLE>;

export interface UserWithRole {
  uid: string;
  role: RoleTypes;
}
