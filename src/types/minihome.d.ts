export const RECENT_CATEGORIES = {
  IDOLS: '아이돌',
  CAMERA: '카메라',
  PENTAX: '펜탁스',
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
  total: number[];
  today: number[];
}