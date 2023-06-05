'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import useAuth from '@/hooks/useAuth';

import AuthModal from '@/components/Auth';
import Session from './Session';
import styles from './Footer.module.scss';

const Footer = () => {
  const { isLoadingMe } = useAuth();
  const searchParams = useSearchParams(); // 상위에 반드시 Suspense로 묶지 않으면 위로 타고 올라가며 Next SSR 전부 깨짐.
  const layout = searchParams.get('layout');
  const fullLayout = layout === 'full';

  if (fullLayout) return null;

  return (
    <footer className={styles.appFooter}>
      <div className={styles.wrapper}>
        {!isLoadingMe ? <Session /> : <div className={styles.auth} />}
        <a href='mailto:miriya.lee@gmail.com' rel='nofollow'>
          MIRIYA © 2012-2023
        </a>
        <Link href='/privacy'>개인정보처리방침</Link>
      </div>
      <AuthModal />
    </footer>
  );
};

export default Footer;
