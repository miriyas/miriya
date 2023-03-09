export type TCategory = 'mixed-group';

export interface IYoutube {
  url: string;
  startsAt: number;
}

export interface IDesc {
  title: string;
  namu: string;
  naver: string;
  melon: string;
}

export interface IIdol {
  debutYear: number;
  endYear: number;
  major: boolean;
  name: string;
  category: TCategory;
  youtube: IYoutube;
  desc: IDesc;
}
