import { ValueOf } from '@/types';

export const COMMON = {
  COMMON_GITHUB_CLICK: 'common_github_click',
} as const;

export const IDOL = {
  IDOL_OPEN: 'idol_open',
  IDOL_DESC_CLICK: 'idol_desc_click',
  IDOL_CATEGORY_CLICK: 'idol_category_click',
  IDOL_YEAR_CLICK: 'idol_year_click',
} as const;

export const CAMERA = {
  CAMERA_MAKER_CLICK: 'CAMERA_MAKER_CLICK',
  CAMERA_YEAR_CLICK: 'camera_year_click',
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
  [CAMERA.CAMERA_YEAR_CLICK]: {
    year: string;
  };

  [key: string]: unknown;
};

export type EventNameTypes = ValueOf<typeof COMMON & typeof IDOL & typeof CAMERA>;
