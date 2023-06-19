import { Comment } from '@/types/comments.d';

import Comments from './Comments';
import styles from '../common.module.scss';

interface Props {
  comments: Comment[];
}

const TabM2 = ({ comments }: Props) => {
  return (
    <div className={styles.commonTab}>
      <p className={styles.menu}>m2day 페이지 댓글 목록</p>
      <div className={styles.commentsWrapper}>
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default TabM2;
