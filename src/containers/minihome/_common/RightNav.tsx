'use client';

import cx from 'clsx';

import { MINIHOME_TAB } from '@/types/minihome.d';

import styles from './RightNav.module.scss';
import NavLink from '@/components/NavLink';

const RightNav = () => {
  return (
    <nav className={styles.rightNav}>
      <ul>
        {(Object.keys(MINIHOME_TAB) as Array<keyof typeof MINIHOME_TAB>).map((key, i) => {
          return (
            <li key={key}>
              <NavLink
                href={`/minihome/${String(key).replace('_', '').toLowerCase()}`}
                hrefs={i === 0 ? ['/minihome/home', '/minihome'] : undefined}
                activeClassName={styles.current}
                className={cx({ [styles.m2day]: key === 'M2_POST' })}
              >
                {MINIHOME_TAB[key]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default RightNav;
