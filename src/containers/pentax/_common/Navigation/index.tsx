'use client';

import React from 'react';

import { MENUS, VERSION } from '@/constants/pentaxes';

import NavLink from '@/components/NavLink';
import styles from './Navigation.module.scss';

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
        1975 ~ 2023 <span>*</span> PENTAXIAN Encyclopedia v{VERSION}
      </p>
    </div>
  );
};

export default Navigation;
