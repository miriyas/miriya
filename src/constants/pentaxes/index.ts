export const VERSION = 2.1;

export const YEAR_INFO = {
  start: 2003,
  end: 2023,
};

export const MENUS = [
  {
    id: 'pentax-nav-home',
    label: '처음',
    labelDetailed: '',
    href: '/pentax',
  },
  {
    id: 'pentax-nav-lens',
    label: '펜탁스 LENS (미구현)',
    labelDetailed: '펜탁스\nK마운트 LENS',
    href: '/pentax/lens',
  },
  {
    id: 'pentax-nav-slr',
    label: '펜탁스 SLR (구현중)',
    labelDetailed: '펜탁스\nSLR 카메라',
    href: '/pentax/slr',
  },
  {
    id: 'pentax-nav-dslr',
    label: '펜탁스 DSLR',
    labelDetailed: '펜탁스\nDSLR 카메라',
    href: '/pentax/dslr',
  },
  {
    id: 'pentax-nav-645',
    label: '645 렌즈군 (미구현)',
    labelDetailed: '펜탁스\n645 렌즈군',
    href: '/pentax/lens645',
  },
];

export { PENTAX_DSLRS } from './dslr';
