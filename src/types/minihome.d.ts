export const MINIHOME_TAB = {
  HOME: 'HOME',
  IDOLS: 'IDOLS',
  CAMERA: 'CAMERA',
  PENTAX: 'PENTAX',
  GUESTBOOK: 'GUESTBOOK',
} as const;

export const TABS = [
  {
    key: MINIHOME_TAB.HOME,
    label: '홈',
  },
  {
    key: MINIHOME_TAB.IDOLS,
    label: '아이돌',
  },
  {
    key: MINIHOME_TAB.CAMERA,
    label: '카메라',
  },
  {
    key: MINIHOME_TAB.PENTAX,
    label: '펜탁스',
  },
  {
    key: MINIHOME_TAB.GUESTBOOK,
    label: '방명록',
  },
];

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
