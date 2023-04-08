'use client';

import { TABS } from '@/types/minihome.d';

import styles from './RightNav.module.scss';
import NavLink from '@/components/NavLink';

const RightNav = () => {
  return (
    <nav className={styles.rightNav}>
      <ul>
        {TABS.map((t) => {
          return (
            <li key={t.key}>
              <NavLink href={`/minihome/${t.key.toLowerCase()}`} activeClassName={styles.current}>
                {t.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default RightNav;
