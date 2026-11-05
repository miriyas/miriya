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

/** Isotope filter for one category ('total' shows all). */
export const categoryFilter = (category: Category) => (elem: HTMLElement) =>
  category === 'total' ? true : elem.classList.value.includes(`category-${category}`);

/**
 * Applies the category to every loaded year. Years on the screen first (at once), then the
 * others one by one when the browser is idle. Each arrange measures all cards of a year, so
 * doing every year at once made the click slow.
 */
let arrangeRun = 0;

export const arrangeCategory = (category: Category) => {
  arrangeRun += 1;
  const run = arrangeRun; // a newer click stops the idle queue of an older click
  const filter = categoryFilter(category);
  const onScreen: number[] = [];
  const offScreen: number[] = [];
  Object.keys(window.isotopes).forEach((key) => {
    const year = Number(key);
    const rect = document.querySelector(`.grid-${year}`)?.getBoundingClientRect();
    const visible = rect && rect.bottom > 0 && rect.top < window.innerHeight;
    (visible ? onScreen : offScreen).push(year);
  });

  onScreen.forEach((year) => window.isotopes[year]?.arrange({ filter }));

  const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 16));
  const next = () => {
    if (run !== arrangeRun) return;
    const year = offScreen.shift();
    if (year === undefined) return;
    window.isotopes[year]?.arrange({ filter });
    idle(next);
  };
  idle(next);
};
