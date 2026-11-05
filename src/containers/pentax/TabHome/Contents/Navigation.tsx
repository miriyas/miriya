'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { MENUS } from '@/containers/pentax/constants';

import styles from './Navigation.module.scss';
import ImageSprite from '@/components/ImageSprite';

export const NavigationView = ({ query }: { query: string }) => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {MENUS.slice(1).map((menu, i) => {
          return (
            <li key={menu.href}>
              <Link href={`${menu.href}?${query}`}>
                <ImageSprite i={i} width={100} height={100} length={4} url='pentax/home-nav.png' priority />
                <div className={styles.label}>{menu.labelDetailed}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

// useSearchParams needs its own <Suspense> with <NavigationView query='' /> as fallback.
const Navigation = () => {
  const query = useSearchParams();
  return <NavigationView query={query.toString()} />;
};

export default Navigation;
