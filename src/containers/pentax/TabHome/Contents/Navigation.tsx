'use client';

import React from 'react';
import Link from 'next/link';

import { MENUS } from '@/constants/pentaxes';

import styles from './Navigation.module.scss';
import ImageSprite from '@/components/ImageSprite';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {MENUS.slice(1).map((menu, i) => {
          return (
            <li key={menu.href}>
              <Link href={menu.href}>
                <ImageSprite i={i} width={100} height={100} length={4} url='pentaxes/home-nav.png' />
                <div className={styles.label}>{menu.labelDetailed}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
