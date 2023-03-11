import type { Gtag } from '@types/gtag.js';

declare global {
  interface Window {
    gtag: Gtag;
    dataLayer: object[];
  }
}

export type ValueOf<T extends Object> = T[keyof T];
