'use client';

import { ChangeEventHandler, Dispatch, FormEventHandler, MouseEventHandler, SetStateAction, useState } from 'react';
import { useAtom } from 'jotai';

import useAuth from '@/hooks/useAuth';
import { showPasswordAtom } from './states';

import styles from './Auth.module.scss';
import FancyEyeBall from './FancyEyeBall';

interface Props {
  setTab: Dispatch<SetStateAction<'login' | 'signup' | undefined>>;
}

const LogIn = ({ setTab }: Props) => {
  const { signInEmail } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useAtom(showPasswordAtom);

  const onClickSionUp: MouseEventHandler<HTMLButtonElement> = () => {
    setTab('signup');
  };

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.currentTarget.value);
  };

  const submitSignIn = () => {
    if (password.length < 6) return;
    signInEmail(email, password);
  };

  const onSignInForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submitSignIn();
  };

  const onSignInClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    submitSignIn();
  };

  return (
    <form onSubmit={onSignInForm}>
      <div className={styles.inputWrapper}>
        <input type='string' value={email} onChange={onChangeEmail} placeholder='이메일' />
      </div>
      <div className={styles.inputWrapper}>
        <input
          type={showPassword ? 'string' : 'password'}
          value={password}
          onChange={onChangePassword}
          placeholder='비밀번호'
        />
        <FancyEyeBall showPassword={showPassword} setShowPassword={setShowPassword} />
      </div>
      <button type='submit' onClick={onSignInClick}>
        로그인
      </button>
      <div className={styles.toOtherTab}>
        자 이제 시작이야 -&nbsp;
        <button type='button' onClick={onClickSionUp}>
          회원가입
        </button>
      </div>
    </form>
  );
};

export default LogIn;
