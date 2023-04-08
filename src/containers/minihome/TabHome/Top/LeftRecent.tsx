'use client';

import cx from 'clsx';
import { useQuery } from '@tanstack/react-query';

import { TARGET_CATEGORY } from '@/types/comments.d';
import { getRecentComments } from '@/services/firebase/comments';

import styles from './LeftRecent.module.scss';

const CategoryMap = {
  [TARGET_CATEGORY.GUESTBOOK]: '방명록',
  [TARGET_CATEGORY.CAMERA]: '카메라',
  [TARGET_CATEGORY.IDOLS]: '아이돌',
  [TARGET_CATEGORY.PENTAX]: '펜탁스',
};

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
                {CategoryMap[recent.targetCategory]}
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
