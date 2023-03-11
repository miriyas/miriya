import { ValueOf } from '@/types';

export const IDOL = {
  IDOL_OPEN: 'idol_open',
  IDOL_DESC_CLICK: 'idol_desc_click',
  IDOL_CATEGORY_CLICK: 'idol_category_click',
  IDOL_YEAR_CLICK: 'idol_year_click',
  IDOL_GITHUB_CLICK: 'idol_github_click',
} as const;

export type DataType = {
  [IDOL.IDOL_OPEN]: {
    name: string;
  };
  [IDOL.IDOL_CATEGORY_CLICK]: {
    category: string;
  };
  [IDOL.IDOL_YEAR_CLICK]: {
    year: string;
  };

  [key: string]: unknown;
};

export type EventNameTypes = ValueOf<typeof IDOL>;
