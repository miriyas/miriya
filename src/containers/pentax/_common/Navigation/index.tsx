'use client';

import React from 'react';

import NavLink from '@/components/NavLink';
import styles from './Navigation.module.scss';

const MENUS = [
  {
    label: '처음',
    href: '/pentax',
  },
  {
    label: '펜탁스 LENS (미구현)',
    href: '/pentax/lens',
  },
  {
    label: '펜탁스 SLR (구현중)',
    href: '/pentax/slr',
  },
  {
    label: '펜탁스 DSLR',
    href: '/pentax/dslr',
  },
  {
    label: '645 렌즈군 (미구현)',
    href: '/pentax/lens645',
  },
];

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <nav>
        <ul>
          {MENUS.map((menu) => {
            return (
              <li key={menu.href}>
                <NavLink href={menu.href} activeClassName={styles.active}>
                  {menu.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <p className={styles.desc}>
        1975 ~ 2023 <span>*</span> PENTAXIAN Encyclopedia v2.1
      </p>
    </div>
  );
};

export default Navigation;
