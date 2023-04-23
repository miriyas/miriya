import { ValueOf } from '@/types/index.d';

export const ROLE = {
  ADMIN: 'ADMIN',
  SUPPORTER: 'SUPPORTER',
  USER: 'USER',
  BLOCKED: 'BLOCKED',
} as const;

export type RoleTypes = ValueOf<typeof ROLE>;
