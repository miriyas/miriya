export interface ItemFix {
  time: string;
  km: number;
  location?: string;
  locationLink?: string;
  title: string;
  body: string;
}

export interface ItemParts {
  name: string;
  partsNo: string;
  price?: number;
}

export interface FBMyCar {
  name: string;
  vin: string;
  maker: string;
  lineup: string;
  owner: string;
  listFix: ItemFix[];
  listParts: ItemParts[];
}
