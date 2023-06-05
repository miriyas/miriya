'use client';

import { useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';

import { authModalAtom } from '../states';

import LogIn from './LogIn';
import SignUp from './SignUp';
import styles from './index.module.scss';

const EmailBased = () => {
  const authModal = useAtomValue(authModalAtom);

  const [tab, setTab] = useState<'login' | 'signup' | undefined>(authModal);

  useEffect(() => {
    setTab(authModal);
  }, [authModal]);

  return (
    <div className={styles.emailBased}>
      {tab === 'login' && <LogIn setTab={setTab} />}
      {tab === 'signup' && <SignUp setTab={setTab} />}
    </div>
  );
};

export default EmailBased;
