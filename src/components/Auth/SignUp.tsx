'use client';

import { ChangeEventHandler, Dispatch, FormEventHandler, MouseEventHandler, SetStateAction, useState } from 'react';
import { useAtom } from 'jotai';

import useAuth from '@/hooks/useAuth';
import { showPasswordAtom } from './states';

import FancyEyeBall from './FancyEyeBall';
import styles from './Auth.module.scss';

interface Props {
  setTab: Dispatch<SetStateAction<'login' | 'signup' | undefined>>;
}

const SignUp = ({ setTab }: Props) => {
  const { signUpEmail } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useAtom(showPasswordAtom);

  const onClickLogIn: MouseEventHandler<HTMLButtonElement> = () => {
    setTab('login');
  };

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.currentTarget.value);
  };

  const submitSignUp = () => {
    if (password.length < 6) return;
    signUpEmail(email, password);
  };

  const onSignUpForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submitSignUp();
  };

  const onSignUpClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    submitSignUp();
  };

  return (
    <form onSubmit={onSignUpForm}>
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
      <button type='submit' onClick={onSignUpClick}>
        회원가입
      </button>

      <div className={styles.toOtherTab}>
        계정이 있다면?&nbsp;
        <button type='button' onClick={onClickLogIn}>
          로그인
        </button>
      </div>
    </form>
  );
};

export default SignUp;
