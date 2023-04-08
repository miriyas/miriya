'use client';

import cx from 'clsx';
import { useQuery } from '@tanstack/react-query';

import { getRecentComments } from '@/services/firebase/comments';
import { RECENT_CATEGORIES } from '@/types/minihome.d';

import styles from './LeftRecent.module.scss';

const LeftRecent = () => {
  const { data: recentComments } = useQuery(['getRecentGuestComments'], () => getRecentComments(4).then((res) => res), {
    suspense: true,
    cacheTime: 6 * 1000,
    refetchOnMount: false,
  });

  return (
    <ul className={styles.leftRecent}>
      {recentComments?.map((recent, i) => {
        const key = `recent-${i}`;
        return (
          <li key={key}>
            <a href={`/minihome/${recent.targetCategory.toLowerCase()}`} data-tab={recent.targetCategory}>
              <div className={cx(styles.commentBadge, styles[recent.targetCategory.toLowerCase()])}>
                {RECENT_CATEGORIES[recent.targetCategory]}
              </div>
              <p className={styles.commentBody}>{recent.body.substring(0, 30)}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default LeftRecent;
