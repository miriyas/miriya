'use client';

import { Suspense } from 'react';
import cx from 'clsx';
import Link from 'next/link';

import useBlog from '../../useBlog';

import Loading from '@/components/Loading';
import styles from './index.module.scss';

const RecentComments = () => {
  const { comments } = useBlog();

  return (
    <div className={styles.listWrapper}>
      <div className={styles.listTitle}>최근 댓글들</div>
      <ul className={styles.list}>
        {comments.map((comment) => {
          return (
            <li key={comment.id} className={cx(styles.listItem, styles.recent)}>
              <Link href={`/blog/${comment.targetId}`} className={styles.title}>
                {comment.body}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const SuspensedRecentComments = () => {
  return (
    <Suspense
      fallback={
        <div className={cx(styles.listWrapper, styles.loading)}>
          <Loading small />
        </div>
      }
    >
      <RecentComments />
    </Suspense>
  );
};

export default SuspensedRecentComments;
