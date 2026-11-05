'use client';

import cx from 'clsx';
import { useSuspenseQuery } from '@tanstack/react-query';

import { RECENT_CATEGORIES } from '@/types/minihome';
import { Comment } from '@/types/comments';
import { getMinihomeLeftCommentsDataAPI } from '@/services/minihome';

import styles from './LeftRecent.module.scss';

interface Props {
  initialData?: Comment[];
  fetchedAt?: number;
}

const LeftRecent = ({ initialData, fetchedAt }: Props) => {
  const { data: recentComments } = useSuspenseQuery({
    queryKey: ['getMinihomeLeftCommentsDataAPI'],
    queryFn: () => getMinihomeLeftCommentsDataAPI().then((res) => res.data),
    initialData,
    initialDataUpdatedAt: fetchedAt,
    refetchOnMount: true, // the HTML can be up to 1 hour old
  });

  return (
    <ul className={styles.leftRecent}>
      {recentComments?.map((recent, i) => {
        const key = `recent-${i}`;
        const shortCategory = recent.category.split('_').join('');
        const href = recent.category === 'M2_POST' ? 'm2day' : recent.category.toLowerCase();
        return (
          <li key={key}>
            <a href={`/minihome/${href}`} data-tab={recent.category}>
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
