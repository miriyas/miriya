'use client';

import { Dispatch, FormEventHandler, MouseEventHandler, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAtom } from 'jotai';

import useAuth from '@/hooks/useAuth';
import { showPasswordAtom } from './states';
import { LogInSchema, logInValidator } from '@/utils/validator';

import styles from './Auth.module.scss';
import FancyEyeBall from './FancyEyeBall';

interface Props {
  setTab: Dispatch<SetStateAction<'login' | 'signup' | undefined>>;
}

const LogIn = ({ setTab }: Props) => {
  const { logInEmail, logInLoading, logInError } = useAuth();

  const methods = useForm<LogInSchema>({ mode: 'onBlur', resolver: yupResolver(logInValidator) });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const [showPassword, setShowPassword] = useAtom(showPasswordAtom);

  const onClickSionUp: MouseEventHandler<HTMLButtonElement> = () => {
    setTab('signup');
  };

  const submitSignIn = handleSubmit((formValues: LogInSchema) => {
    logInEmail(formValues.email, formValues.password);
  });

  const onSignInForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submitSignIn();
  };

  const onSignInClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    submitSignIn();
  };

  const errorMessage = Object.values(errors).length > 0 ? Object.values(errors)[0].message : undefined;

  return (
    <form onSubmit={onSignInForm}>
      <div className={styles.inputWrapper}>
        <input {...register('email')} type='string' placeholder='이메일' disabled={logInLoading} />
      </div>
      <div className={styles.inputWrapper}>
        <input
          {...register('password')}
          type={showPassword ? 'string' : 'password'}
          placeholder='비밀번호'
          autoComplete='off'
          disabled={logInLoading}
        />
        <FancyEyeBall showPassword={showPassword} setShowPassword={setShowPassword} />
      </div>
      <button type='submit' onClick={onSignInClick} disabled={logInLoading}>
        로그인
      </button>
      <div className={styles.error}>{logInError || errorMessage}</div>
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
