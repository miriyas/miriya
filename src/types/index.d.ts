/* eslint-disable no-var */
/* eslint-disable vars-on-top */

import { MouseEvent } from 'react';
import Isotope from 'isotope-layout';

import type { Gtag } from '@types/gtag.js';

export interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  // Deprecated
  domUpdated?: Promise<void>;
  updateCallbackDone: Promise<void>;
}

declare global {
  var ongoingTransition: ViewTransition | undefined;

  interface Window {
    gtag: Gtag;
    dataLayer: object[];
    isotopes: {
      [key: number]: Isotope;
    };
    onClickYoutube: (e: MouseEvent<HTMLAnchorElement>, link: string) => void;
  }

  interface Document {
    startViewTransition: (setupPromise: () => Promise<void> | void) => ViewTransition;
  }
}

export type ValueOf<T extends Object> = T[keyof T];

export interface TimeStamp {
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}

export interface WithAuthor {
  authorId: string;
  author: {
    nickname: string;
    nicknameIsFake?: boolean;
    profileUrl?: string;
  };
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
