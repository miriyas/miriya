'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

import { MENUS, VERSION } from '@/containers/pentax/constants';

import NavLink from '@/components/NavLink';
import styles from './Navigation.module.scss';
import ExternalLink from '@/components/ExternalLink';

const Navigation = () => {
  const query = useSearchParams(); // 상위에 반드시 Suspense로 묶지 않으면 위로 타고 올라가며 Next SSR 전부 깨짐.

  return (
    <div className={styles.navigation}>
      <nav>
        <ul>
          {MENUS.map((menu) => {
            return (
              <li key={menu.href}>
                <NavLink href={`${menu.href}?${query}`} activeClassName={styles.active} exact>
                  {menu.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <p className={styles.desc}>
        1975 ~ 2023 <span>*</span>{' '}
        <ExternalLink href='https://miriya.net/pentax'>PENTAXIAN Encyclopedia v{VERSION}</ExternalLink>
      </p>
    </div>
  );
};

export default Navigation;
