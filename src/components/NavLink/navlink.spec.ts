import { getIsActive } from './utils';

it('getIsActive', () => {
  expect(getIsActive({ href: '/', pathname: '/' })).toBe(true);
  expect(getIsActive({ href: '/', pathname: '/shit' })).toBe(true); // ovious
  expect(getIsActive({ href: '/profile', pathname: '/' })).toBe(false);
  expect(getIsActive({ href: '/profile', pathname: '/shit' })).toBe(false);
  expect(getIsActive({ href: '/profile', pathname: '/profile' })).toBe(true);

  expect(getIsActive({ href: '/idols', pathname: '/' })).toBe(false);
  expect(getIsActive({ href: '/idols', pathname: '/shit' })).toBe(false);
  expect(getIsActive({ href: '/idols', pathname: '/idols' })).toBe(true);

  expect(getIsActive({ href: '/cameras', pathname: '/' })).toBe(false);
  expect(getIsActive({ href: '/cameras', pathname: '/shit' })).toBe(false);
  expect(getIsActive({ href: '/cameras', pathname: '/cameras' })).toBe(true);
  expect(getIsActive({ href: '/cameras', pathname: '/cameras?maker=canon' })).toBe(true);
  expect(getIsActive({ href: '/cameras', pathname: '/cameras#canon-d60' })).toBe(true);
  expect(getIsActive({ href: '/cameras', pathname: '/cameras?maker=canon#canon-d60' })).toBe(true);

  expect(getIsActive({ href: '/pentax', pathname: '/' })).toBe(false);
  expect(getIsActive({ href: '/pentax', pathname: '/', exact: true })).toBe(false);
  expect(getIsActive({ href: '/pentax', pathname: '/shit' })).toBe(false);
  expect(getIsActive({ href: '/pentax', pathname: '/shit', exact: true })).toBe(false);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax' })).toBe(true);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax', exact: true })).toBe(true);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax?layout=full' })).toBe(true);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax?layout=full', exact: true })).toBe(false);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/lens' })).toBe(true);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/lens', exact: true })).toBe(false);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/slr' })).toBe(true);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/slr', exact: true })).toBe(false);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/dslr' })).toBe(true);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/dslr', exact: true })).toBe(false);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/lens645' })).toBe(true);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/lens645', exact: true })).toBe(false);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/lens' })).toBe(true);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/lens', exact: true })).toBe(false);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/slr' })).toBe(true);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/slr', exact: true })).toBe(false);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/dslr' })).toBe(true);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/dslr', exact: true })).toBe(false);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/lens645' })).toBe(true);
  expect(getIsActive({ href: '/pentax', pathname: '/pentax/lens645', exact: true })).toBe(false);

  expect(getIsActive({ href: '/mycar', pathname: '/' })).toBe(false);
  expect(getIsActive({ href: '/mycar', pathname: '/shit' })).toBe(false);
  expect(getIsActive({ href: '/mycar', pathname: '/mycar' })).toBe(true);
  expect(getIsActive({ href: '/mycar', pathname: '/mycar/new' })).toBe(true);
  expect(getIsActive({ href: '/mycar', pathname: '/mycar/hL0XAW5GmEpx7Vn5czGs' })).toBe(true);
  expect(getIsActive({ href: '/mycar', pathname: '/mycar/hL0XAW5GmEpx7Vn5czGs/edit' })).toBe(true);

  expect(getIsActive({ href: '/blog', pathname: '/' })).toBe(false);
  expect(getIsActive({ href: '/blog', pathname: '/shit' })).toBe(false);
  expect(getIsActive({ href: '/blog', pathname: '/blog' })).toBe(true);
  expect(getIsActive({ href: '/blog', pathname: '/blog/clk764r1g000wh2m3szjkg961' })).toBe(true);
  expect(getIsActive({ href: '/blog', pathname: '/blog/clk764r1g000wh2m3szjkg961/edit' })).toBe(true);
  expect(getIsActive({ href: '/blog', pathname: '/blog/post/new' })).toBe(true);
  expect(getIsActive({ href: '/blog', pathname: '/blog/categories' })).toBe(true);
  expect(getIsActive({ href: '/blog', pathname: '/blog/categories/8VQNGHpLxY18FAbmSnSs' })).toBe(true);
  expect(getIsActive({ href: '/blog', pathname: '/blog/search' })).toBe(true);
  expect(getIsActive({ href: '/blog', pathname: '/blog/search?q=검색어' })).toBe(true);

  expect(getIsActive({ href: '/m2day', pathname: '/' })).toBe(false);
  expect(getIsActive({ href: '/m2day', pathname: '/shit' })).toBe(false);
  expect(getIsActive({ href: '/m2day', pathname: '/m2day' })).toBe(true);

  expect(getIsActive({ href: '/minihome', pathname: '/' })).toBe(false);
  expect(getIsActive({ href: '/minihome', pathname: '/shit' })).toBe(false);
  expect(getIsActive({ href: '/minihome', pathname: '/minihome' })).toBe(true);
  expect(getIsActive({ href: '/minihome', pathname: '/minihome/home' })).toBe(true);
  expect(getIsActive({ href: '/minihome', pathname: '/minihome/idols' })).toBe(true);
  expect(getIsActive({ href: '/minihome', pathname: '/minihome/camera' })).toBe(true);
  expect(getIsActive({ href: '/minihome', pathname: '/minihome/pentax' })).toBe(true);
  expect(getIsActive({ href: '/minihome', pathname: '/minihome/blog' })).toBe(true);
  expect(getIsActive({ href: '/minihome', pathname: '/minihome/m2day' })).toBe(true);
  expect(getIsActive({ href: '/minihome', pathname: '/minihome/guestbook' })).toBe(true);
  expect(
    getIsActive({
      href: '/minihome',
      pathname: '/minihome',
      hrefs: ['/minihome/home', '/minihome'],
    }),
  ).toBe(true);
  expect(
    getIsActive({
      href: '/minihome',
      pathname: '/minihome/home',
      hrefs: ['/minihome/home', '/minihome'],
    }),
  ).toBe(true);
  expect(
    getIsActive({
      href: '/minihome',
      pathname: '/minihome/idols',
      hrefs: ['/minihome/home', '/minihome'],
    }),
  ).toBe(false);

  expect(getIsActive({ href: '/privacy', pathname: '/' })).toBe(false);
  expect(getIsActive({ href: '/privacy', pathname: '/shit' })).toBe(false);
  expect(getIsActive({ href: '/privacy', pathname: '/privacy' })).toBe(true);
  expect(getIsActive({ href: '/privacy', pathname: '/privacy?something=true' })).toBe(true);
});
