import cx from 'clsx';
import { useSetAtom } from 'jotai';
import { MouseEventHandler } from 'react';
import { useQuery } from '@tanstack/react-query';

import { TARGET_CATEGORY } from '@/types/comments.d';
import { GuestbookTabTypes } from '@/types/guestbook.d';
import { tabAtom } from '@/containers/guestbook/states';
import { getRecentComments } from '@/services/comments';

import styles from './CommentsRecent.module.scss';

const CategoryMap = {
  [TARGET_CATEGORY.GUESTBOOK]: '방명록',
  [TARGET_CATEGORY.CAMERA]: '카메라',
  [TARGET_CATEGORY.IDOLS]: '아이돌',
  [TARGET_CATEGORY.PENTAX]: '펜탁스',
};

const CommentsRecent = () => {
  const setTab = useSetAtom(tabAtom);

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setTab(e.currentTarget.dataset.tab as GuestbookTabTypes);
  };

  const { data: recentComments } = useQuery(['getRecentGuestComments'], () => getRecentComments(4).then((res) => res), {
    suspense: true,
    cacheTime: 6 * 1000,
    refetchOnMount: false,
  });

  return (
    <ul className={styles.commentsRecent}>
      {recentComments?.map((recent, i) => {
        const key = `recent-${i}`;
        return (
          <li key={key}>
            <button type='button' onClick={onClick} data-tab={recent.targetCategory}>
              <div className={cx(styles.commentBadge, styles[recent.targetCategory.toLowerCase()])}>
                {CategoryMap[recent.targetCategory]}
              </div>
              <p className={styles.commentBody}>{recent.body.substring(0, 30)}</p>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentsRecent;
