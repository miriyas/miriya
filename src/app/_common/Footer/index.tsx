'use client';

import React from 'react';
import { useSetAtom } from 'jotai';

import { authModalAtom } from '@/components/Auth/states';
import useAuth from '@/hooks/useAuth';

import AuthModal from '@/components/Auth';
import styles from './Footer.module.scss';

const Footer = () => {
  const { user, logOut } = useAuth();

  const setAuthModal = useSetAtom(authModalAtom);

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
      </div>
      <AuthModal />
    </footer>
  );
};

export default Footer;
