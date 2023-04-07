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
    mobileTitle: 'MIRIYA',
  },
  {
    href: '/idols',
    title: 'History of Idols',
    mobileTitle: 'Idols',
  },
  {
    href: '/cameras',
    title: 'History of DSLR',
    mobileTitle: 'DSLR',
  },
  {
    href: '/pentax',
    title: 'Pentaxian Encyclopedia',
    mobileTitle: 'Pentaxian',
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
      <nav className={styles.mobileNav}>
        <div className={styles.upper}>
          <Link href={ROUTES[0].href} className={styles.home} onClick={onClickLink}>
            <span className={styles.mobileOnly}>{ROUTES[0].mobileTitle}</span>
          </Link>
          <Link href='/guestbook' className={cx(styles.guestbook, { [styles.active]: current === '/guestbook' })}>
            방명록
          </Link>
        </div>
        <details>
          <summary>
            <span />
            <span />
            <span />
          </summary>
          <div className={styles.menus}>
            <ul>
              {ROUTES.slice(1).map((route) => {
                const { href, mobileTitle } = route;
                return (
                  <li key={href}>
                    <Link href={href} className={cx({ [styles.active]: current === href })} onClick={onClickLink}>
                      {mobileTitle}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className={styles.github}>
              <a
                onClick={onClickGithub}
                href='https://github.com/miriyas/miriya'
                target='_blank'
                title='Github'
                rel='nofollow'
              >
                <IconGithub />
              </a>
            </div>
          </div>
        </details>
      </nav>

      <nav className={styles.desktopNav}>
        <ul>
          {ROUTES.map((route, i) => {
            const { href, title } = route;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cx({ [styles.active]: current === href, [styles.home]: i === 0 })}
                  onClick={onClickLink}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.outerLinks}>
          <Link href='/guestbook' className={cx(styles.guestbook, { [styles.active]: current === '/guestbook' })}>
            방명록
          </Link>
          <a
            className={styles.github}
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
