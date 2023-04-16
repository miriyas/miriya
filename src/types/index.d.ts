import type { Gtag } from '@types/gtag.js';

declare global {
  interface Window {
    gtag: Gtag;
    dataLayer: object[];
  }
}

export type ValueOf<T extends Object> = T[keyof T];

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
