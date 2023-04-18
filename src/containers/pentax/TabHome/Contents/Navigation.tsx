'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { MENUS } from '@/constants/pentaxes';

import styles from './Navigation.module.scss';
import ImageSprite from '@/components/ImageSprite';

const Navigation = () => {
  const query = useSearchParams(); // 상위에 반드시 Suspense로 묶지 않으면 위로 타고 올라가며 Next SSR 전부 깨짐.

  return (
    <nav className={styles.navigation}>
      <ul>
        {MENUS.slice(1).map((menu, i) => {
          return (
            <li key={menu.href}>
              <Link href={`${menu.href}?${query}`}>
                <ImageSprite i={i} width={100} height={100} length={4} url='pentaxes/home-nav.png' priority />
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
