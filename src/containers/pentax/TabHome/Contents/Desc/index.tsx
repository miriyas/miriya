/* eslint-disable react/no-danger */

'use client';

import { useQuery } from '@tanstack/react-query';

import { getDescMarkdownApi } from '@/services/pentaxes';

import styles from './Desc.module.scss';

const Desc = () => {
  const { data, isLoading, isError } = useQuery(
    ['getDescMarkdownApi'],
    () => getDescMarkdownApi().then((res) => res.json()),
    {
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  return (
    <div className={styles.desc}>
      <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default Desc;
