'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

import { MENUS, VERSION } from '@/containers/pentax/constants';

import NavLink from '@/components/NavLink';
import styles from './Navigation.module.scss';
import ExternalLink from '@/components/ExternalLink';

// The links keep the current query (for example ?layout=full).
export const NavigationView = ({ query }: { query: string }) => {
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

// useSearchParams needs its own <Suspense> with <NavigationView query='' /> as fallback.
// Otherwise the whole page loses server rendering.
const Navigation = () => {
  const query = useSearchParams();
  return <NavigationView query={query.toString()} />;
};

export default Navigation;
