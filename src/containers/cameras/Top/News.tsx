'use client';

import cx from 'clsx';
import { useQuery } from '@tanstack/react-query';

import { getRecentNewsApi } from '@/services/cameras';

import styles from './index.module.scss';
import ExternalLink from '@/components/ExternalLink';

const NewsBar = () => {
  const newsLength = 10;
  const { data } = useQuery(
    ['getRecentNewsApi', newsLength],
    () => getRecentNewsApi(newsLength).then((res) => res.data),
    {
      suspense: true,
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  return (
    <ul className={cx(styles.commonBox, styles.news)}>
      {data?.map((newsItem) => {
        return (
          <li key={newsItem.link}>
            <ExternalLink href={newsItem.link}>{newsItem.title}</ExternalLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsBar;
