import Isotope from '@/libs/isotope-layout';
import type { Gtag } from '@types/gtag.js';

declare global {
  interface Window {
    gtag: Gtag;
    dataLayer: object[];
  }
}

export interface IsotopesType {
  [key: number]: Isotope;
}

export type ValueOf<T extends Object> = T[keyof T];
