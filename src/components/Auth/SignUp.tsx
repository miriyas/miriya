'use client';

import { Dispatch, FormEventHandler, MouseEventHandler, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAtom } from 'jotai';

import useAuth from '@/hooks/useAuth';
import { showPasswordAtom } from './states';
import { SignUpSchema, signUpValidator } from '@/utils/validator';

import FancyEyeBall from './FancyEyeBall';
import styles from './Auth.module.scss';

interface Props {
  setTab: Dispatch<SetStateAction<'login' | 'signup' | undefined>>;
}

const SignUp = ({ setTab }: Props) => {
  const { signUpEmail, signUpLoading, signUpError } = useAuth();

  const methods = useForm<SignUpSchema>({ mode: 'onBlur', resolver: yupResolver(signUpValidator) });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const [showPassword, setShowPassword] = useAtom(showPasswordAtom);

  const onClickLogIn: MouseEventHandler<HTMLButtonElement> = () => {
    setTab('login');
  };

  const submitSignUp = handleSubmit((formValues: SignUpSchema) => {
    signUpEmail(formValues.email, formValues.password);
  });

  const onSignUpForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submitSignUp();
  };

  const onSignUpClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    submitSignUp();
  };

  const errorMessage = Object.values(errors).length > 0 ? Object.values(errors)[0].message : undefined;

  return (
    <form onSubmit={onSignUpForm}>
      <div className={styles.inputWrapper}>
        <input {...register('email')} type='string' placeholder='이메일' disabled={signUpLoading} />
      </div>
      <div className={styles.inputWrapper}>
        <input
          {...register('password')}
          type={showPassword ? 'string' : 'password'}
          placeholder='비밀번호'
          autoComplete='off'
          disabled={signUpLoading}
        />
        <FancyEyeBall showPassword={showPassword} setShowPassword={setShowPassword} />
      </div>
      <div className={styles.inputWrapper}>
        <input
          {...register('passwordConfirm')}
          type={showPassword ? 'string' : 'password'}
          placeholder='비밀번호'
          autoComplete='off'
          disabled={signUpLoading}
        />
      </div>
      <button type='submit' onClick={onSignUpClick}>
        회원가입
      </button>
      <div className={styles.error}>{signUpError || errorMessage}</div>

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
