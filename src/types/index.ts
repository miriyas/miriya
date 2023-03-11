export type TCategory = 'total' | 'mixed-group' | 'girl-group' | 'boy-group' | 'girl-solo' | 'boy-solo';

export const CATEGORIES: TCategory[] = ['total', 'mixed-group', 'girl-group', 'boy-group', 'girl-solo', 'boy-solo'];

export const prettyCategory = (category: TCategory) => {
  return {
    total: '전체',
    'mixed-group': '혼성그룹',
    'girl-group': '여성그룹',
    'boy-group': '남성그룹',
    'girl-solo': '여성솔로',
    'boy-solo': '남성솔로',
  }[category];
};

export type TYear = number | '활동중';

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
  debutYear: TYear;
  desc?: IDesc;
  endYear?: TYear;
  major?: boolean;
  name: string;
  searchIndex?: number;
  searchName?: string;
  youtube?: IYoutube;
}

export interface IYearDesc {
  year: number;
  desc: string;
}

export interface IIsotopes {
  [key: number]: Isotope;
}
