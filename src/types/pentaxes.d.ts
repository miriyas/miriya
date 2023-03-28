import { ValueOf } from '@/types';

export const PENTAX_DSLR_TYPE = {
  IST: 'IST',
  K: 'K',
  NEW_K: 'NEWK',
} as const;

export type PentaxDslrTypes = ValueOf<typeof PENTAX_DSLR_TYPE>;

export interface PentaxDslr {
  type: PentaxDslrTypes;
  name: string;
  line: number;
  startYear: number;
  startQuarter: number;
  endYear?: number;
  endQuarter?: number;
}
