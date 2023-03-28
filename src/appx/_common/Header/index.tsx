'use client';

import React, { MouseEventHandler } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cx from 'clsx';
import { useRafState } from 'react-use';

import { useGA } from '@/hooks/useGA';
import { COMMON } from '@/constants/ga';

import { IconGithub } from '../../../../public/svgs';
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

  const [current, setCurrent] = useRafState(pathname); // NOTE: 로딩에 의한 탭 전환 딜레이 줄이기 위해 Request Animation Frame 사용

  const onClickLink: MouseEventHandler<HTMLAnchorElement> = (e) => {
    setCurrent(e.currentTarget.pathname);
  };

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
                <Link href={href} className={cx({ [styles.active]: current === href })} onClick={onClickLink}>
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
