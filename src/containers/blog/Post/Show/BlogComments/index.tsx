'use client';

import cx from 'clsx';

import useBlogComment from './useBlogComment';

import Loading from '@/components/Loading';
import ItemComment from './Item';
import styles from './index.module.scss';

interface Props {
  targetId: string;
  withHeader?: boolean;
}

const BlogComments = ({ targetId, withHeader }: Props) => {
  const { comments, isLoadingComments } = useBlogComment({ targetId });

  if (isLoadingComments) {
    return (
      <div className={cx(styles.commentList, styles.loading)}>
        <Loading small />
      </div>
    );
  }

  return (
    <div className={styles.commentList}>
      {withHeader && (
        <div className={styles.header}>
          댓글 <span>{comments.length + comments.reduce((acc, c) => acc + (c.children?.length || 0), 0)}</span>
        </div>
      )}
      <ul className={cx(styles.comments)}>
        {comments.map((comment) => (
          <ItemComment key={comment.id} comment={comment} />
        ))}
        {comments.length === 0 && (
          <li className={cx(styles.item, styles.blank)}>
            <div className={styles.upper}>가장 먼저 댓글을 달아주세요!</div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BlogComments;
