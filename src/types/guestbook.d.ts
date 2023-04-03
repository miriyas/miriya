import { ValueOf } from '@/types';

export const GUESTBOOK_TAB = {
  HOME: 'HOME',
  IDOLS: 'IDOLS',
  DSLR: 'DSLR',
  PENTAX: 'PENTAX',
  GUEST: 'GUEST',
} as const;

export type GuestbookTabTypes = ValueOf<typeof GUESTBOOK_TAB>;

export interface GADataRow {
  dimensionValues: {
    value: string;
    oneValue: string;
  }[];
  metricValues: {
    value: string;
    oneValue: string;
  }[];
}

export interface CounterData {
  total: number[];
  today: number[];
}
