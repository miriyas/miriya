'use client';

import React from 'react';
import { useSetAtom } from 'jotai';
import cx from 'clsx';

import { authModalAtom } from '@/components/Auth/states';
import { getUserName } from '@/utils';
import useAuth from '@/hooks/useAuth';

import Loading from '@/components/Loading';
import styles from './index.module.scss';

const Session = () => {
  const { user, logOut, logOutLoading } = useAuth();
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
      <button type='button' onClick={logOut} className={cx({ [styles.loading]: logOutLoading })}>
        <Loading small className={styles.loadingIcon} />
        <span>로그아웃</span>
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
