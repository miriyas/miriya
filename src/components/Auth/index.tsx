'use client';

import { useCallback, useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import Image from 'next/image';
import cx from 'clsx';

import { authModalAtom, showPasswordAtom } from './states';
import useAuth from '@/hooks/useAuth';
import useAuthEmail from '@/hooks/useAuthEmail';
import useAuthSocial from '@/hooks/useAuthSocial';

import { Modal } from '@/components/Modal';
import EmailBased from './EmailBased';
import SocialBased from './SocialBased';
import styles from './Auth.module.scss';

const AuthModal = () => {
  const authModal = useAtomValue(authModalAtom);
  const resetAuthModal = useResetAtom(authModalAtom);

  const { user } = useAuth();
  const { cleanUpEmailRelatedState } = useAuthEmail();
  const { cleanUpSocialRelatedState } = useAuthSocial();
  const showPassword = useAtomValue(showPasswordAtom);

  const onClose = useCallback(() => {
    resetAuthModal();
    cleanUpEmailRelatedState();
    cleanUpSocialRelatedState();
  }, [resetAuthModal, cleanUpEmailRelatedState, cleanUpSocialRelatedState]);

  useEffect(() => {
    // 로그인 하면 모달 닫기.
    if (user) onClose();
  }, [onClose, user]);

  return (
    <Modal isShow={!!authModal} onClose={onClose} closeIcon>
      <div className={styles.authModal}>
        <div className={styles.head}>
          <div className={cx(styles.imageWrapper, { [styles.hidePassword]: !showPassword })}>
            <Image
              src='/images/home/profile.jpg'
              width={100}
              height={100}
              alt=''
              title='AI가 그린 그림이지롱'
              className={styles.image}
            />
          </div>
          <p className={styles.desc}>환영합니다. 댓글좀 달아주세요.</p>
        </div>
        <SocialBased />
        <p className={styles.desc}>위에 클릭해서 소셜 로그인, 아니면..</p>
        <EmailBased />
      </div>
    </Modal>
  );
};

export default AuthModal;
