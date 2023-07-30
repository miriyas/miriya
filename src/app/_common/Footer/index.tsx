'use client';

import React, { MouseEventHandler } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { useGA } from '@/hooks/useGA';
import { COMMON } from '@/constants/ga';

import { IconGithub } from 'public/svgs';
import AuthModal from '@/components/Auth';
import styles from './index.module.scss';

const Footer = () => {
  const { gaEvent } = useGA();
  const searchParams = useSearchParams(); // 상위에 반드시 Suspense로 묶지 않으면 위로 타고 올라가며 Next SSR 전부 깨짐.
  const layout = searchParams.get('layout');
  const fullLayout = layout === 'full';

  if (fullLayout) return null;

  const onClickGithub: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href);
    gaEvent(COMMON.COMMON_GITHUB_CLICK, {});
  };

  return (
    <footer className={styles.appFooter}>
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
        <a href='mailto:miriya.lee@gmail.com' rel='nofollow'>
          MIRIYA © 2012-2023
        </a>
        <Link href='/privacy' prefetch={false}>
          개인정보처리방침
        </Link>
      </div>
      <AuthModal />
    </footer>
  );
};

export default Footer;
