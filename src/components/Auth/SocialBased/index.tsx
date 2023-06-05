'use client';

import { MouseEventHandler } from 'react';
import cx from 'clsx';

import useAuthSocial from '@/hooks/useAuthSocial';
import useAuthEmail from '@/hooks/useAuthEmail';
import { SupportedProviders } from '@/types/index.d';

import { IconProviderFacebook, IconProviderGithub, IconProviderGoogle } from 'public/svgs';
import authStyles from '../index.module.scss';
import styles from './index.module.scss';

const Social = () => {
  const { logInWithSocial, socialLoading, socialError } = useAuthSocial();
  const { logInLoading } = useAuthEmail();

  const socialLogin: MouseEventHandler<HTMLButtonElement> = (e) => {
    logInWithSocial(e.currentTarget.dataset.provider as SupportedProviders);
  };

  const disabled = logInLoading || socialLoading;

  return (
    <div className={cx(styles.socialBased, { [styles.loading]: disabled })}>
      <ul>
        <li>
          <button
            type='button'
            onClick={socialLogin}
            data-provider='google'
            aria-label='google login'
            disabled={disabled}
          >
            <IconProviderGoogle />
          </button>
        </li>
        <li>
          <button
            type='button'
            onClick={socialLogin}
            data-provider='facebook'
            aria-label='facebook login'
            disabled={disabled}
          >
            <IconProviderFacebook />
          </button>
        </li>
        <li>
          <button
            type='button'
            onClick={socialLogin}
            data-provider='github'
            aria-label='github login'
            disabled={disabled}
          >
            <IconProviderGithub />
          </button>
        </li>
      </ul>
      <div className={authStyles.commonError}>{socialError}</div>
    </div>
  );
};

export default Social;
