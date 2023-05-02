/* eslint-disable react/no-danger */

'use client';

import { useQuery } from '@tanstack/react-query';

import { getDescMarkdownApi } from '@/services/pentaxes';

import Loading from '@/components/Loading';
import styles from './Desc.module.scss';

const Desc = () => {
  const { data, isLoading } = useQuery(['getDescMarkdownApi'], () => getDescMarkdownApi().then((res) => res.data));

  return (
    <div className={styles.desc}>
      {isLoading && <Loading />}
      <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default Desc;
