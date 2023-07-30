'use client';

import React from 'react';
import { useSetAtom } from 'jotai';
import cx from 'clsx';

import { authModalAtom } from '@/components/Auth/states';
import { getUserName } from '@/utils';
import useAuth from '@/hooks/useAuth';

import Loading from '@/components/Loading';
import styles from './Session.module.scss';

const Session = () => {
  const { isLoadingMe, user, logOut, logOutLoading } = useAuth();
  const setAuthModal = useSetAtom(authModalAtom);

  const onClickLogin = () => {
    setAuthModal('login');
  };

  const onClickSignUp = () => {
    setAuthModal('signup');
  };

  if (isLoadingMe) return <div className={styles.session} />;

  return user ? (
    <div className={styles.session}>
      <p className={styles.userName}>{getUserName(user)}</p>
      <button type='button' onClick={logOut} className={cx({ [styles.loading]: logOutLoading })}>
        <Loading small className={styles.loadingIcon} />
        <span>로그아웃</span>
      </button>
    </div>
  ) : (
    <div className={styles.session}>
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
