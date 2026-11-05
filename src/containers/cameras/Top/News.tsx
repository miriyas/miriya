'use client';

import cx from 'clsx';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getRecentNewsApi } from '@/services/cameras';

import styles from './index.module.scss';
import ExternalLink from '@/components/ExternalLink';

const NewsBar = () => {
  const newsLength = 10;
  const { data = [], isError } = useSuspenseQuery({
    queryKey: ['getRecentNewsApi', newsLength],
    queryFn: () => getRecentNewsApi(newsLength).then((res) => res.data),
  });

  const hasError = data[0].title === 'error';

  if (isError || hasError) {
    return (
      <ul className={cx(styles.commonBox, styles.news)}>
        <li>{data[0].link}</li>
      </ul>
    );
  }

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
