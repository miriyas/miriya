'use client';

import React from 'react';
import { useSetAtom } from 'jotai';

import { authModalAtom } from '@/components/Auth/states';
import useAuth from '@/hooks/useAuth';

import styles from './index.module.scss';
import Button from '@/components/Button';

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
        <Button onClick={onClickLogin} size='tiny'>
          로그인
        </Button>
        <Button onClick={onClickSignUp} size='tiny'>
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default PleaseLogin;
