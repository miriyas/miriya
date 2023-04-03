import cx from 'clsx';

import { GUESTBOOK_TAB } from '@/types/guestbook.d';

import styles from './CommentsRecent.module.scss';

const RECENT_COMMENTS_TEMP = [
  {
    category: GUESTBOOK_TAB.DSLR,
    body: '캐논이 어쩌고',
  },
  {
    category: GUESTBOOK_TAB.IDOLS,
    body: '비티에스가 어쩌고 저쩌고 그렇고 그렇게fdasf',
  },
  {
    category: GUESTBOOK_TAB.PENTAX,
    body: '펜탁스가 짱이라능',
  },
  {
    category: GUESTBOOK_TAB.GUEST,
    body: '미리야 병신',
  },
];

const CommentsRecent = () => {
  return (
    <ul className={styles.commentsRecent}>
      {RECENT_COMMENTS_TEMP.map((recent, i) => {
        const key = `recent-${i}`;
        return (
          <li key={key}>
            <div className={cx(styles.commentBadge, styles[recent.category.toLowerCase()])}>{recent.category}</div>
            <p className={styles.commentBody}>{recent.body}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentsRecent;
