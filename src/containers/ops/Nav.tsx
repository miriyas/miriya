'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cx from 'clsx';

import styles from './index.module.scss';

const TABS = [
  { href: '/ops', label: '개요' },
  { href: '/ops/miriya', label: 'miriya 서버' },
  { href: '/ops/charr', label: '차르르' },
  { href: '/ops/meetups', label: '카카오 모임' },
  { href: '/ops/ai', label: 'AI 비용' },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      {TABS.map((tab) => (
        <Link key={tab.href} href={tab.href} className={cx({ [styles.active]: pathname === tab.href })}>
          {tab.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
