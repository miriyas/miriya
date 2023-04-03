'use client';

import { Dispatch, FormEventHandler, MouseEventHandler, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAtom } from 'jotai';

import useAuthEmail from '@/hooks/useAuthEmail';
import { showPasswordAtom } from '../states';
import { SignUpSchema, signUpValidator } from '@/utils/validator';

import FancyEyeBall from './FancyEyeBall';
import authStyles from '../Auth.module.scss';
import styles from './EmailBased.module.scss';

interface Props {
  setTab: Dispatch<SetStateAction<'login' | 'signup' | undefined>>;
}

const SignUp = ({ setTab }: Props) => {
  const { signUpEmail, signUpLoading, signUpError } = useAuthEmail();

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

  const onSignUp: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleSubmit((formValues: SignUpSchema) => {
      signUpEmail(formValues.email, formValues.password);
    });
  };

  const errorMessage = Object.values(errors).length > 0 ? Object.values(errors)[0].message : undefined;

  return (
    <form onSubmit={onSignUp}>
      <div className={styles.inputWrapper}>
        <input {...register('email')} type='string' placeholder='이메일' disabled={signUpLoading} />
      </div>
      <div className={styles.inputWrapper}>
        <input
          {...register('password')}
          type={showPassword ? 'string' : 'password'}
          placeholder='비밀번호 (6글자 이상)'
          autoComplete='off'
          disabled={signUpLoading}
        />
        <FancyEyeBall showPassword={showPassword} setShowPassword={setShowPassword} />
      </div>
      <div className={styles.inputWrapper}>
        <input
          {...register('passwordConfirm')}
          type={showPassword ? 'string' : 'password'}
          placeholder='비밀번호 확인'
          autoComplete='off'
          disabled={signUpLoading}
        />
      </div>
      <button type='submit'>회원가입</button>
      <div className={authStyles.commonError}>{signUpError || errorMessage}</div>

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
