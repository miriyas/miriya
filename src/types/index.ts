export type TCategory = 'mixed-group' | 'girl-group' | 'boy-group' | 'girl-solo' | 'boy-solo';

export interface IYoutube {
  startsAt: number;
  url: string;
}

export interface IDesc {
  melon?: string;
  namu?: string;
  naver?: string;
  title?: string;
}

export interface IIdol {
  category: TCategory;
  debutYear: number;
  desc?: IDesc;
  endYear?: number | '활동중';
  major?: boolean;
  name: string;
  searchIndex?: number;
  searchName?: string;
  youtube?: IYoutube;
}
