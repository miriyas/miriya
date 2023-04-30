import type { IsotopeOptions } from 'isotope-layout';
import { Category } from '@/types/idols';

export const prettyCategory = (category: Category) => {
  return {
    total: '전체',
    'mixed-group': '혼성그룹',
    'girl-group': '여성그룹',
    'boy-group': '남성그룹',
    'girl-solo': '여성솔로',
    'boy-solo': '남성솔로',
  }[category];
};

export const getIsotopeOptions = (year: number, isMobile: boolean): IsotopeOptions => {
  return {
    itemSelector: `.grid-item-${year}`,
    layoutMode: 'packery',
    transitionDuration: 200,
    percentPosition: true,
    packery: {
      gutter: 28,
      columnWidth: isMobile ? 132 : 140,
    },
  };
};
