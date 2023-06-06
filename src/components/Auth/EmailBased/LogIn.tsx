'use client';

import { Dispatch, FormEventHandler, MouseEventHandler, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAtom } from 'jotai';

import useAuthEmail from '@/hooks/useAuthEmail';
import useAuthSocial from '@/hooks/useAuthSocial';
import { showPasswordAtom } from '../states';
import { LogInSchema, logInValidator } from '@/utils/validator';

import FancyEyeBall from './FancyEyeBall';
import authStyles from '../index.module.scss';
import styles from './index.module.scss';
import Button from '@/components/Button';

interface Props {
  setTab: Dispatch<SetStateAction<'login' | 'signup' | undefined>>;
}

const LogIn = ({ setTab }: Props) => {
  const { logInEmail, logInLoading, logInError } = useAuthEmail();
  const { socialLoading } = useAuthSocial();

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
  const disabled = socialLoading || logInLoading;

  return (
    <form onSubmit={onSignIn}>
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
      <Button type='submit' disabled={disabled} skin='primary'>
        로그인
      </Button>
      {(logInError || errorMessage) && <div className={authStyles.commonError}>{logInError || errorMessage}</div>}
      <div className={styles.toOtherTab}>
        이렇게 반가울데가.. &nbsp;
        <button type='button' onClick={onClickSionUp} disabled={disabled}>
          회원가입
        </button>
      </div>
    </form>
  );
};

export default LogIn;
