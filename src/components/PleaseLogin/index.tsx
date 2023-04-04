'use client';

import React from 'react';
import { useSetAtom } from 'jotai';

import { authModalAtom } from '@/components/Auth/states';
import useAuth from '@/hooks/useAuth';

import styles from './index.module.scss';

const PleaseLogin = () => {
  const { user } = useAuth();

  const setAuthModal = useSetAtom(authModalAtom);

  const onClickLogin = () => {
    setAuthModal('login');
  };

  const onClickSignUp = () => {
    setAuthModal('signup');
  };

  if (user) return null;

  return (
    <div className={styles.pleaseLogin}>
      <p>로그인을 해주세요.</p>
      <div className={styles.wrapper}>
        <button type='button' onClick={onClickLogin}>
          로그인
        </button>
        <button type='button' onClick={onClickSignUp}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default PleaseLogin;
