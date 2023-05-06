import { WithAuthor, WithTS } from '@/types/firebase.d';

export interface NewMyCar {
  name: string;
  vin: string;
  maker: string;
  lineup: string;
}

export interface FBMyCar extends NewMyCar, WithAuthor, WithTS {
  id: string;
}

export interface ItemFix {
  time: string;
  km?: number;
  miles?: number;
  location?: string;
  locationUrl?: string;
  title: string;
  body?: string;
}

export interface NewItemFix extends ItemFix {
  carId: string;
}

export interface FBItemFix extends NewItemFix, WithAuthor, WithTS {
  id: string;
}

export interface ItemParts {
  name: string;
  partsNo: string;
  partsUrl?: string;
  body: string;
}

export interface NewItemParts extends ItemParts {
  carId: string;
}

export interface FBItemParts extends NewItemParts, WithAuthor, WithTS {
  id: string;
}
