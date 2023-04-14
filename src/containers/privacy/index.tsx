'use client';

/* eslint-disable react/no-danger */
import cx from 'clsx';
import { useQuery } from '@tanstack/react-query';

import { getPrivacyMarkdownApi } from '@/services/privacy';

import Loading from '@/components/Loading';
import styles from './Privacy.module.scss';

const PrivacyPage = () => {
  const { data, isLoading, isError } = useQuery(
    ['getPrivacyMarkdownApi'],
    () => getPrivacyMarkdownApi().then((res) => res.data),
    {
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  if (isLoading) {
    return (
      <div className={cx(styles.privacy, styles.loading)}>
        <div className={styles.centering}>
          <div className={styles.loading}>
            <Loading />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.privacy}>
        <div className={styles.centering}>
          <div className={styles.error}>
            <p>ERROR</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className={styles.privacy}>
      <div className={styles.centering}>
        <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    </main>
  );
};

export default PrivacyPage;
