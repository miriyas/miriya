'use client';

import { Dispatch, FormEventHandler, MouseEventHandler, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAtom } from 'jotai';

import useAuthEmail from '@/hooks/useAuthEmail';
import { showPasswordAtom } from '../states';
import { LogInSchema, logInValidator } from '@/utils/validator';

import FancyEyeBall from './FancyEyeBall';
import authStyles from '../Auth.module.scss';
import styles from './EmailBased.module.scss';

interface Props {
  setTab: Dispatch<SetStateAction<'login' | 'signup' | undefined>>;
}

const LogIn = ({ setTab }: Props) => {
  const { logInEmail, logInLoading, logInError } = useAuthEmail();

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

  const submitLogIn = handleSubmit((formValues: LogInSchema) => {
    logInEmail(formValues.email, formValues.password);
  });

  const onSignIn: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submitLogIn();
  };

  const errorMessage = Object.values(errors).length > 0 ? Object.values(errors)[0].message : undefined;

  return (
    <form onSubmit={onSignIn}>
      <div className={styles.inputWrapper}>
        <input {...register('email')} type='string' placeholder='이메일' disabled={logInLoading} />
      </div>
      <div className={styles.inputWrapper}>
        <input
          {...register('password')}
          type={showPassword ? 'string' : 'password'}
          placeholder='비밀번호 (6글자 이상)'
          autoComplete='off'
          disabled={logInLoading}
        />
        <FancyEyeBall showPassword={showPassword} setShowPassword={setShowPassword} />
      </div>
      <button type='submit' disabled={logInLoading}>
        로그인
      </button>
      <div className={authStyles.commonError}>{logInError || errorMessage}</div>
      <div className={styles.toOtherTab}>
        이렇게 반가울데가.. &nbsp;
        <button type='button' onClick={onClickSionUp}>
          회원가입
        </button>
      </div>
    </form>
  );
};

export default LogIn;
