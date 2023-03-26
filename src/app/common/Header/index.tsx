'use client';

import React, { MouseEventHandler } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cx from 'clsx';

import { useGA } from '@/hooks/useGA';
import { COMMON } from '@/constants/ga';

import { IconGithub } from '../../../../public/images/svgs';
import styles from './Header.module.scss';

const ROUTES = [
  {
    href: '/',
    title: 'MIRIYA',
  },
  {
    href: '/idols',
    title: 'History of Idols',
  },
  {
    href: '/cameras',
    title: 'History of DSLR',
  },
];

const Header = () => {
  const { gaEvent } = useGA();
  const pathname = usePathname();

  const onClickGithub: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href);
    gaEvent(COMMON.COMMON_GITHUB_CLICK, {});
  };

  return (
    <header className={styles.appHeader}>
      <nav className={styles.wrapper}>
        <ul>
          {ROUTES.map((route) => {
            const { href, title } = route;
            return (
              <li key={href}>
                <Link href={href} className={cx({ [styles.active]: pathname === href })}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.outerLinks}>
          <a
            onClick={onClickGithub}
            href='https://github.com/miriyas/miriya'
            target='_blank'
            title='Github'
            rel='nofollow'
          >
            <IconGithub />
            <span>Github</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
