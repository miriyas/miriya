/* eslint-disable react/no-danger */
import { useQuery } from '@tanstack/react-query';

import { getReadmeApi } from '@/services/pentaxes';

import styles from './ReadMe.module.scss';

const ReadMe = () => {
  const { data, isLoading, isError } = useQuery(['getReadmeApi'], () => getReadmeApi().then((res) => res.json()), {
    cacheTime: 6 * 1000,
    refetchOnMount: false,
  });

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
    <div className={styles.readMe}>
      <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default ReadMe;
