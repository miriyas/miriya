'use client';

import React, { MouseEventHandler } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { useGA } from '@/hooks/useGA';
import { COMMON } from '@/constants/ga';

import { IconGithub } from 'public/svgs';
import AuthModal from '@/components/Auth';
import styles from './index.module.scss';

export const FooterView = ({ fullLayout = false }: { fullLayout?: boolean }) => {
  const { gaEvent } = useGA();

  if (fullLayout) return null;

  const onClickGithub: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href);
    gaEvent(COMMON.COMMON_GITHUB_CLICK, {});
  };

  return (
    <footer className={styles.appFooter} data-chrome>
      <div className={styles.wrapper}>
        <a
          className={styles.github}
          onClick={onClickGithub}
          href='https://github.com/miriyas/miriya'
          target='_blank'
          title='Github'
          rel='nofollow'
        >
          <IconGithub />
          <p>Github</p>
        </a>
        {/* Static pages are rendered at build time; the browser may show a newer year. */}
        <a href='mailto:miriya.lee@gmail.com' rel='nofollow' suppressHydrationWarning>
          MIRIYA © 2012-{new Date().getFullYear()}
        </a>
        <Link href='/privacy' prefetch={false}>
          개인정보처리방침
        </Link>
      </div>
      <AuthModal />
    </footer>
  );
};

// useSearchParams needs its own <Suspense> in layout.tsx. Its fallback is <FooterView />,
// so the server HTML still has this part and the page does not jump.
const Footer = () => {
  const searchParams = useSearchParams();
  return <FooterView fullLayout={searchParams.get('layout') === 'full'} />;
};

export default Footer;
