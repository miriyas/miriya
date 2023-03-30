/* eslint-disable react/no-danger */
import cx from 'clsx';
import { useQuery } from '@tanstack/react-query';

import { getReadMeMarkdownApi } from '@/services/pentaxes';

import Loading from '@/components/Loading';
import styles from './ReadMe.module.scss';

const ReadMe = () => {
  const { data, isLoading, isError } = useQuery(
    ['getReadMeMarkdownApi'],
    () => getReadMeMarkdownApi().then((res) => res.json()),
    {
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  if (isLoading) {
    return (
      <div className={cx(styles.mdWrapper, styles.loading)}>
        <div className={styles.loading}>
          <Loading />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.mdWrapper}>
        <div className={styles.error}>
          <p>ERROR</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mdWrapper}>
      <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default ReadMe;
