'use client';

import { M2PostType } from '@/types/m2day';
import { dayjs } from '@/utils/date';

import Post from './Post';
import styles from './DateItem.module.scss';

interface Props {
  day: string;
  posts: M2PostType[];
}

const DateItem = ({ day, posts }: Props) => {
  const d = dayjs(day);

  return (
    <li className={styles.dateItem}>
      <time className={styles.dayBlock}>
        <p className={styles.dayTop}>{d.get('date')}</p>
        <p className={styles.dayBottom}>{d.locale('en').format('MMM YYYY')}</p>
      </time>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </li>
  );
};

export default DateItem;
