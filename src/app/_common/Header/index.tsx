'use client';

import React, { MouseEventHandler } from 'react';
import Link from 'next/link';
import cx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';
import { flushSync } from 'react-dom';

import { useGA } from '@/hooks/useGA';
import { COMMON } from '@/constants/ga';
import { transitionHelper } from '@/utils/transition';

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
  {
    href: '/minihome',
    title: '미니홈',
    mobileTitle: '미니홈',
    aside: true,
  },
];

const getTransitionDirection = (oldHref: string, newHref: string) => {
  if (oldHref.includes(newHref)) return 'baseTransition';

  const oldRoute = ROUTES.find((r) => r.href === oldHref);
  const newRoute = ROUTES.find((r) => r.href === newHref);
  if (!oldRoute || !newRoute) return 'baseTransition';

  const oldIndex = ROUTES.indexOf(oldRoute);
  const newIndex = ROUTES.indexOf(newRoute);
  return oldIndex > newIndex ? 'backTransition' : 'frontTransition';
};

const Header = () => {
  const router = useRouter();
  const { gaEvent } = useGA();
  const searchParams = useSearchParams(); // 상위에 반드시 Suspense로 묶지 않으면 위로 타고 올라가며 Next SSR 전부 깨짐.
  const layout = searchParams.get('layout');
  const fullLayout = layout === 'full';

  if (fullLayout) return null;

  const MAIN_ROUTES = ROUTES.filter((r) => !r.aside);

  const viewNavigate: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

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

  const onClickGithub: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href);
    gaEvent(COMMON.COMMON_GITHUB_CLICK, {});
  };

  return (
    <header className={styles.appHeader}>
      <nav className={styles.mobileNav}>
        <div className={styles.upper}>
          <Link href={ROUTES[0].href} className={styles.home} onClick={viewNavigate}>
            <span className={styles.mobileOnly}>{ROUTES[0].mobileTitle}</span>
          </Link>
          <NavLink
            href='/minihome'
            hrefs={['/minihome/home', '/minihome']}
            className={styles.minihome}
            activeClassName={styles.active}
            onClick={viewNavigate}
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
              {MAIN_ROUTES.slice(1).map((route) => {
                const { href, mobileTitle } = route;
                return (
                  <li key={href}>
                    <NavLink href={href} activeClassName={styles.active} onClick={viewNavigate}>
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
          {MAIN_ROUTES.map((route, i) => {
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
        <div className={styles.outerLinks}>
          <NavLink
            href='/minihome'
            hrefs={['/minihome/home', '/minihome']}
            className={styles.minihome}
            activeClassName={styles.active}
            onClick={viewNavigate}
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
