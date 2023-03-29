/* eslint-disable react/no-danger */
import { useQuery } from '@tanstack/react-query';

import { getHelpMeMarkdownApi, getReadMeMarkdownApi } from '@/services/pentaxes';

import styles from './ReadMe.module.scss';

const ReadMe = () => {
  const {
    data: readMe,
    isLoading: isReadMeLoading,
    isError: isReadMeError,
  } = useQuery(['getReadMeMarkdownApi'], () => getReadMeMarkdownApi().then((res) => res.json()), {
    cacheTime: 6 * 1000,
    refetchOnMount: false,
  });

  const {
    data: helpMe,
    isLoading: isHelpMeLoading,
    isError: isHelpMeError,
  } = useQuery(['getHelpMeMarkdownApi'], () => getHelpMeMarkdownApi().then((res) => res.json()), {
    cacheTime: 6 * 1000,
    refetchOnMount: false,
  });

  if (isReadMeLoading || isHelpMeLoading) {
    return (
      <div className={styles.loading}>
        <p>Loading...</p>
      </div>
    );
  }

  if (isReadMeError || isHelpMeError) {
    return (
      <div className={styles.error}>
        <p>ERROR</p>
      </div>
    );
  }

  return (
    <div className={styles.mdWrapper}>
      <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: readMe }} />
      <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: helpMe }} />
    </div>
  );
};

export default ReadMe;
