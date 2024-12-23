'use client';

import React, { MouseEventHandler, useState } from 'react';
import Link from 'next/link';
import cx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';
import { flushSync } from 'react-dom';

import { transitionHelper } from '@/utils/transition';
import { ROUTES } from './constants';

import NavLink from '@/components/NavLink';
import Session from './Session';
import styles from './index.module.scss';

const getTransitionDirection = (oldHref: string, newHref: string) => {
  const oldHrefParent = oldHref.split('/')[1];
  const newHrefParent = newHref.split('/')[1];
  if (oldHref.includes(newHref)) return 'baseTransition';

  const oldRoute = ROUTES.find((r) => r.href.includes(oldHrefParent));
  const newRoute = ROUTES.find((r) => r.href.includes(newHrefParent));
  if (!oldRoute || !newRoute) return 'baseTransition';

  const oldIndex = ROUTES.indexOf(oldRoute);
  const newIndex = ROUTES.indexOf(newRoute);
  return oldIndex > newIndex ? 'backTransition' : 'frontTransition';
};

const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // 상위에 반드시 Suspense로 묶지 않으면 위로 타고 올라가며 Next SSR 전부 깨짐.
  const fullLayout = searchParams.get('layout') === 'full';

  const [mobileOpen, setMobileOpen] = useState(false);

  if (fullLayout) return null;

  const viewNavigate: MouseEventHandler<HTMLAnchorElement> = (e) => {
    setMobileOpen(false);
    document.documentElement.classList.remove('mobileCoverOpen');

    // 뒤로가기 앞으로가기에 따라 트랜지션 방향을 전환함
    const oldHref = window.location.href.replace(window.location.origin, '');
    const newHref = e.currentTarget.href.replace(window.location.origin, '');
    const transitionDirection = getTransitionDirection(oldHref, newHref);

    document.documentElement.classList.add(transitionDirection);
    transitionHelper(() => {
      // https://react.dev/reference/react-dom/flushSync 퍼포먼스에 영향가니 주의해서 사용해야함
      flushSync(() => {
        router.push(newHref);
      });
    }).finished.finally(() => {
      document.documentElement.classList.remove('baseTransition', 'backTransition', 'frontTransition');
    });
  };

  const onClickHamburger = () => {
    setMobileOpen((prev) => {
      if (prev) {
        document.documentElement.classList.remove('mobileCoverOpen');
      } else {
        document.documentElement.classList.add('mobileCoverOpen');
      }
      return !prev;
    });
  };

  return (
    <header className={styles.appHeader}>
      <nav className={styles.mobileNav}>
        <div className={styles.upper}>
          <Link href={ROUTES[0].href} className={styles.home} onClick={viewNavigate}>
            <span className={styles.mobileOnly}>{ROUTES[0].title}</span>
          </Link>
          <button
            className={cx(styles.mobileHamburger, { [styles.mobileOpen]: mobileOpen })}
            type='button'
            onClick={onClickHamburger}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={cx(styles.mobileMenuWrapper, { [styles.mobileOpen]: mobileOpen })}>
          <div className={styles.menus}>
            <ul>
              {ROUTES.slice(1).map((route) => {
                const { href, title } = route;
                return (
                  <li key={href}>
                    <NavLink href={href} activeClassName={styles.active} onClick={viewNavigate}>
                      {title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <Session />
          </div>
        </div>
      </nav>

      <nav className={styles.desktopNav}>
        <ul>
          {ROUTES.map((route, i) => {
            const { href, title } = route;
            return (
              <li key={href}>
                <NavLink
                  href={href}
                  className={cx({ [styles.home]: i === 0 })}
                  activeClassName={styles.active}
                  onClick={viewNavigate}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Session />
      </nav>
    </header>
  );
};

export default Header;
