import { WithAuthor, WithTS } from '@/types/firebase.d';

interface MyCar {
  name: string;
  vin: string;
  maker: string;
  lineup: string;
}

export interface FBMyCar extends MyCar, WithAuthor, WithTS {
  id: string;
  imageUrl: string;
}

// 정비 내역

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

// 부품 목록

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

// 링크 목록

export interface ItemLink {
  title: string;
  url: string;
  body?: string;
}

export interface NewItemLink extends ItemLink {
  carId: string;
}

export interface FBItemLink extends NewItemLink, WithAuthor, WithTS {
  id: string;
}
