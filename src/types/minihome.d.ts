import { TimeStamp, WithAuthor } from '@/types';

export type RecentCategoriesType = {
  [key: string]: string;
};

export const RECENT_CATEGORIES: RecentCategoriesType = {
  IDOLS: '아이돌',
  CAMERA: '카메라',
  PENTAX: '펜탁스',
  BLOG: '블로그',
  GUESTBOOK: '방명록',
} as const;

export const MINIHOME_TAB = {
  HOME: '홈',
  ...RECENT_CATEGORIES,
} as const;

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
  total?: number[];
  today?: number[];
}

export interface RightCategory {
  [key: string]: {
    today: number;
    total: number;
  };
}

export interface NewGuestbook {
  body: string;
  hidden?: boolean;
}

export interface Guestbook extends NewGuestbook, WithAuthor, TimeStamp {
  id: string;
  guestbookNo: number | null;
}

export interface GuestbookData {
  items: Guestbook[];
  nextCursor?: string;
}
