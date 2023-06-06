'use client';

import { Dispatch, FormEventHandler, MouseEventHandler, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAtom } from 'jotai';

import useAuthEmail from '@/hooks/useAuthEmail';
import useAuthSocial from '@/hooks/useAuthSocial';
import { showPasswordAtom } from '../states';
import { SignUpSchema, signUpValidator } from '@/utils/validator';

import FancyEyeBall from './FancyEyeBall';
import authStyles from '../index.module.scss';
import styles from './index.module.scss';
import Button from '@/components/Button';

interface Props {
  setTab: Dispatch<SetStateAction<'login' | 'signup' | undefined>>;
}

const SignUp = ({ setTab }: Props) => {
  const { signUpEmail, signUpLoading, signUpError } = useAuthEmail();
  const { socialLoading } = useAuthSocial();

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

  const onSignUp: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submitSignUp();
  };

  const errorMessage = Object.values(errors).length > 0 ? Object.values(errors)[0].message : undefined;
  const disabled = socialLoading || signUpLoading;

  return (
    <form onSubmit={onSignUp}>
      <div className={styles.inputWrapper}>
        <input {...register('email')} type='string' placeholder='이메일' disabled={disabled} />
      </div>
      <div className={styles.inputWrapper}>
        <input
          {...register('password')}
          type={showPassword ? 'string' : 'password'}
          placeholder='비밀번호 (6글자 이상)'
          autoComplete='off'
          disabled={disabled}
        />
        {!disabled && <FancyEyeBall showPassword={showPassword} setShowPassword={setShowPassword} />}
      </div>
      <div className={styles.inputWrapper}>
        <input
          {...register('passwordConfirm')}
          type={showPassword ? 'string' : 'password'}
          placeholder='비밀번호 확인'
          autoComplete='off'
          disabled={disabled}
        />
      </div>
      <Button type='submit' disabled={disabled} skin='primary'>
        회원가입
      </Button>
      {(signUpError || errorMessage) && <div className={authStyles.commonError}>{signUpError || errorMessage}</div>}

      <div className={styles.toOtherTab}>
        계정이 있다면?&nbsp;
        <button type='button' onClick={onClickLogIn} disabled={disabled}>
          로그인
        </button>
      </div>
    </form>
  );
};

export default SignUp;
