'use client';

import cx from 'clsx';
import { useQuery } from '@tanstack/react-query';

import { RECENT_CATEGORIES } from '@/types/minihome.d';
import { getMinihomeLeftCommentsDataAPI } from '@/services/minihome';

import styles from './LeftRecent.module.scss';

const LeftRecent = () => {
  const { data: recentComments } = useQuery(
    ['getMinihomeLeftCommentsDataAPI'],
    () => getMinihomeLeftCommentsDataAPI().then((res) => res.data),
    {
      suspense: true,
    },
  );

  return (
    <ul className={styles.leftRecent}>
      {recentComments?.map((recent, i) => {
        const key = `recent-${i}`;
        const shortCategory = recent.category.split('_').join('');
        return (
          <li key={key}>
            <a href={`/minihome/${recent.category.toLowerCase()}`} data-tab={recent.category}>
              <div className={cx(styles.commentBadge, styles[shortCategory.toLowerCase()])}>
                {RECENT_CATEGORIES[recent.category]}
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
