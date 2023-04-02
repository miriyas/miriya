'use client';

import useAuthSocial from '@/hooks/useAuthSocial';

import { IconProviderApple, IconProviderFacebook, IconProviderGithub, IconProviderGoogle } from 'public/svgs';
import authStyles from '../Auth.module.scss';
import styles from './SocialBased.module.scss';

const Social = () => {
  const { logInGoogle, socialError } = useAuthSocial();

  return (
    <div className={styles.socialBased}>
      <ul>
        <li>
          <button type='button' onClick={logInGoogle}>
            <IconProviderGoogle />
          </button>
        </li>
        <li>
          <button type='button' onClick={logInGoogle}>
            <IconProviderFacebook />
          </button>
        </li>
        <li>
          <button type='button' onClick={logInGoogle}>
            <IconProviderApple />
          </button>
        </li>
        <li>
          <button type='button' onClick={logInGoogle}>
            <IconProviderGithub />
          </button>
        </li>
      </ul>
      <div className={authStyles.commonError}>{socialError}</div>
    </div>
  );
};

export default Social;
