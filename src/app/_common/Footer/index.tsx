'use client';

import React from 'react';
import { useSetAtom } from 'jotai';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { authModalAtom } from '@/components/Auth/states';
import useAuth from '@/hooks/useAuth';
import { getUserName } from '@/utils';

import AuthModal from '@/components/Auth';
import styles from './Footer.module.scss';

const Footer = () => {
  const { user, logOut } = useAuth();
  const searchParams = useSearchParams(); // 상위에 반드시 Suspense로 묶지 않으면 위로 타고 올라가며 Next SSR 전부 깨짐.
  const layout = searchParams.get('layout');
  const fullLayout = layout === 'full';

  const setAuthModal = useSetAtom(authModalAtom);

  if (fullLayout) return null;

  const onClickLogin = () => {
    setAuthModal('login');
  };

  const onClickSignUp = () => {
    setAuthModal('signup');
  };

  return (
    <footer className={styles.appFooter}>
      <div className={styles.wrapper}>
        {user ? (
          <div className={styles.auth}>
            {getUserName(user)}
            <button type='button' onClick={logOut}>
              로그아웃
            </button>
          </div>
        ) : (
          <div className={styles.auth}>
            <button type='button' onClick={onClickLogin}>
              로그인
            </button>
            <button type='button' onClick={onClickSignUp}>
              회원가입
            </button>
          </div>
        )}
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
