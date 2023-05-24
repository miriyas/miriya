'use client';

import { Suspense } from 'react';
import cx from 'clsx';
import Link from 'next/link';

import useBlog from '../../useBlog';

import Loading from '@/components/Loading';
import styles from './index.module.scss';

const RecentPosts = () => {
  const { posts } = useBlog();

  return (
    <div className={styles.listWrapper}>
      <div className={styles.listTitle}>최근 글들</div>
      <ul className={styles.list}>
        {posts.map((post) => {
          return (
            <li key={post.id} className={cx(styles.listItem, styles.recent)}>
              <Link href={`/blog/${post.id}`} className={styles.title}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const SuspensedRecentPosts = () => {
  return (
    <Suspense
      fallback={
        <div className={cx(styles.listWrapper, styles.loading)}>
          <Loading small />
        </div>
      }
    >
      <RecentPosts />
    </Suspense>
  );
};

export default SuspensedRecentPosts;
