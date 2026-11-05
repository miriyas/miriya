'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSetAtom } from 'jotai';
import { useClickAway } from 'react-use';
import cx from 'clsx';

import { authModalAtom } from '@/components/Auth/states';
import { getUserName } from '@/utils';
import useAuth from '@/hooks/useAuth';

import Loading from '@/components/Loading';
import styles from './Session.module.scss';

const Session = () => {
  const { isLoadingMe, user, logOut, logOutLoading, isAdmin } = useAuth();
  const setAuthModal = useSetAtom(authModalAtom);

  // Admin only: the name opens a small menu with the link to /ops (the dashboard is not linked anywhere else).
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickAway(menuRef, () => setMenuOpen(false));
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const onClickLogin = () => {
    setAuthModal('login');
  };

  const onClickSignUp = () => {
    setAuthModal('signup');
  };

  if (isLoadingMe) return <div className={styles.session} />;

  return user ? (
    <div className={styles.session}>
      {isAdmin ? (
        <div className={styles.userMenu} ref={menuRef}>
          <button
            type='button'
            className={styles.userName}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-haspopup='menu'
          >
            {getUserName(user)}
          </button>
          {menuOpen && (
            <ul className={styles.menu} role='menu'>
              <li role='none'>
                <Link href='/ops' role='menuitem' prefetch={false} onClick={() => setMenuOpen(false)}>
                  운영 상태
                </Link>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <p className={styles.userName}>{getUserName(user)}</p>
      )}
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
