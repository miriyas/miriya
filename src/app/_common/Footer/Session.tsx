'use client';

import React from 'react';
import { useSetAtom } from 'jotai';

import { authModalAtom } from '@/components/Auth/states';
import { getUserName } from '@/utils';
import useAuth from '@/hooks/useAuth';

import styles from './Footer.module.scss';

const Session = () => {
  const { user, logOut } = useAuth();
  const setAuthModal = useSetAtom(authModalAtom);

  const onClickLogin = () => {
    setAuthModal('login');
  };

  const onClickSignUp = () => {
    setAuthModal('signup');
  };

  return user ? (
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
  );
};

export default Session;
