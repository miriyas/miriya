import Isotope from 'isotope-layout';

import type { Gtag } from '@types/gtag.js';

declare global {
  interface Window {
    gtag: Gtag;
    dataLayer: object[];
    isotopes: {
      [key: number]: Isotope;
    };
  }
}

export type ValueOf<T extends Object> = T[keyof T];

export interface TimeStamp {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SupportedProviders = 'google' | 'facebook' | 'github';

export type InputFields = Record<
  string,
  | string
  | {
      type?: string;
      label: string;
      step?: string;
      desc?: string;
      example?: string;
    }
>;
