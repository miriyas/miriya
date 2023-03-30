/* eslint-disable react/no-danger */
import { useQuery } from '@tanstack/react-query';

import { getReadMeMarkdownApi } from '@/services/pentaxes';

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
      <div className={styles.loading}>
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.error}>
        <p>ERROR</p>
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
