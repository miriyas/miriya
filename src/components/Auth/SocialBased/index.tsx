'use client';

import { MouseEventHandler } from 'react';

import useAuthSocial from '@/hooks/useAuthSocial';
import { SupportedProviders } from '@/types/index.d';

import { IconProviderFacebook, IconProviderGithub, IconProviderGoogle } from 'public/svgs';
import authStyles from '../Auth.module.scss';
import styles from './SocialBased.module.scss';

const Social = () => {
  const { logInWithSocial, socialError } = useAuthSocial();

  const socialLogin: MouseEventHandler<HTMLButtonElement> = (e) => {
    logInWithSocial(e.currentTarget.dataset.provider as SupportedProviders);
  };

  return (
    <div className={styles.socialBased}>
      <ul>
        <li>
          <button type='button' onClick={socialLogin} data-provider='google' aria-label='google login'>
            <IconProviderGoogle />
          </button>
        </li>
        <li>
          <button type='button' onClick={socialLogin} data-provider='facebook' aria-label='facebook login'>
            <IconProviderFacebook />
          </button>
        </li>
        <li>
          <button type='button' onClick={socialLogin} data-provider='github' aria-label='github login'>
            <IconProviderGithub />
          </button>
        </li>
      </ul>
      <div className={authStyles.commonError}>{socialError}</div>
    </div>
  );
};

export default Social;
