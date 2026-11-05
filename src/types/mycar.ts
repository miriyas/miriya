import { TimeStamp, WithAuthor } from '@/types';

interface MyCarCore {
  name: string;
  vin: string;
  maker: string;
  lineup: string;
}

export interface NewMyCar extends MyCarCore {
  image: File;
}

export interface EditMyCar extends NewMyCar {
  id: string;
}

export interface MyCar extends MyCarCore, WithAuthor, TimeStamp {
  id: string;
  imageUrl: string;
}

// 정비 내역

export interface ItemFixCore {
  time: string;
  km?: number;
  miles?: number;
  location?: string;
  locationUrl?: string;
  title: string;
  body?: string;
}

export interface NewItemFix extends ItemFixCore {
  carId: string;
}

export interface EditItemFix extends NewItemFix {
  id: string;
}

export interface ItemFix extends ItemFixCore, WithAuthor, TimeStamp {
  carId: string;
  id: string;
}

// 부품 목록

export interface ItemPartsCore {
  name: string;
  partsNo: string;
  partsUrl?: string;
  body: string;
}

export interface NewItemParts extends ItemPartsCore {
  carId: string;
}

export interface EditItemParts extends NewItemParts {
  id: string;
}

export interface ItemParts extends ItemPartsCore, WithAuthor, TimeStamp {
  id: string;
  carId: string;
}

// 링크 목록

export interface ItemLinkCore {
  title: string;
  url: string;
  body?: string;
}

export interface NewItemLink extends ItemLinkCore {
  carId: string;
}

export interface EditItemLink extends NewItemLink {
  id: string;
  carId: string;
}

export interface ItemLink extends ItemLinkCore, WithAuthor, TimeStamp {
  id: string;
  carId: string;
}
