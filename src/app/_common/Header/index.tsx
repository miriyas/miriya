'use client';

import React, { MouseEventHandler } from 'react';
import Link from 'next/link';
import cx from 'clsx';
import { useSearchParams } from 'next/navigation';

import { useGA } from '@/hooks/useGA';
import { COMMON } from '@/constants/ga';

import { IconGithub } from '../../../../public/svgs';
import styles from './Header.module.scss';
import NavLink from '@/components/NavLink';

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
  {
    href: '/mycar',
    title: 'My Car',
    mobileTitle: 'My Car',
  },
  {
    href: '/blog',
    title: 'Blog',
    mobileTitle: 'Blog',
  },
  {
    href: '/m2day',
    title: 'm2day',
    mobileTitle: 'm2day',
  },
];

const Header = () => {
  const { gaEvent } = useGA();
  const searchParams = useSearchParams(); // 상위에 반드시 Suspense로 묶지 않으면 위로 타고 올라가며 Next SSR 전부 깨짐.
  const layout = searchParams.get('layout');
  const fullLayout = layout === 'full';

  const onClickGithub: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href);
    gaEvent(COMMON.COMMON_GITHUB_CLICK, {});
  };

  if (fullLayout) return null;

  return (
    <header className={styles.appHeader}>
      <nav className={styles.mobileNav}>
        <div className={styles.upper}>
          <Link href={ROUTES[0].href} className={styles.home}>
            <span className={styles.mobileOnly}>{ROUTES[0].mobileTitle}</span>
          </Link>
          <NavLink
            href='/minihome'
            hrefs={['/minihome/home', '/minihome']}
            className={styles.minihome}
            activeClassName={styles.active}
          >
            미니홈피
          </NavLink>
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
                    <NavLink href={href} activeClassName={styles.active}>
                      {mobileTitle}
                    </NavLink>
                  </li>
                );
              })}
              <li>
                <a
                  onClick={onClickGithub}
                  href='https://github.com/miriyas/miriya'
                  target='_blank'
                  title='Github'
                  rel='nofollow'
                >
                  <IconGithub />
                </a>
              </li>
            </ul>
          </div>
        </details>
      </nav>

      <nav className={styles.desktopNav}>
        <ul>
          {ROUTES.map((route, i) => {
            const { href, title } = route;
            return (
              <li key={href}>
                <NavLink href={href} className={cx({ [styles.home]: i === 0 })} activeClassName={styles.active}>
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className={styles.outerLinks}>
          <NavLink
            href='/minihome'
            hrefs={['/minihome/home', '/minihome']}
            className={styles.minihome}
            activeClassName={styles.active}
          >
            미니홈피
          </NavLink>
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
