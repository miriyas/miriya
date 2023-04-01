'use client';

import { useEffect, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import Image from 'next/image';
import cx from 'clsx';

import { authModalAtom, showPasswordAtom } from './states';

import { Modal } from '@/components/Modal';
import styles from './Auth.module.scss';
import LogIn from '@/components/Auth/LogIn';
import SignUp from '@/components/Auth/SignUp';

const AuthModal = () => {
  const [authModal, setAuthModal] = useAtom(authModalAtom);
  const [tab, setTab] = useState<'login' | 'signup' | undefined>(authModal);
  const showPassword = useAtomValue(showPasswordAtom);

  useEffect(() => {
    setTab(authModal);
  }, [authModal]);

  return (
    <Modal isShow={!!authModal} onClose={() => setAuthModal(undefined)} closeIcon>
      <div className={styles.authModal}>
        <div className={styles.head}>
          <div className={cx(styles.imageWrapper, { [styles.hidePassword]: !showPassword })}>
            <Image src='/images/home/profile.jpg' fill alt='' className={styles.image} />
          </div>
          <p className={styles.welcome}>
            환영합니다. 댓글좀 달아주세요.
            <br />
            비밀번호는 그냥 6글자 이상만 입력하셔도 됩니다.
          </p>
        </div>
        <div className={styles.wrapper}>
          {tab === 'login' && <LogIn setTab={setTab} />}
          {tab === 'signup' && <SignUp setTab={setTab} />}
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
