import { useEffect, useState } from 'react';
import cx from 'clsx';

import { IdolType } from '@/types/idols.d';
import { TARGET_CATEGORY, Comment } from '@/types/comments.d';
import { getCommentsInTargetRealtime } from '@/services/comments';

import Desc from './Desc';
import CommentItem from './CommentItem';
import commentItemStyles from './CommentItem.module.scss';
import styles from './CommentList.module.scss';

interface Props {
  idol: IdolType;
}

const Comments = ({ idol }: Props) => {
  const { name } = idol;
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const unSubscribeComments = getCommentsInTargetRealtime(TARGET_CATEGORY.IDOLS, name, setComments);
    return () => unSubscribeComments();
  }, [name]);

  return (
    <ul className={styles.commentList}>
      <Desc idol={idol} />
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      {comments.length === 0 && (
        <li className={cx(commentItemStyles.commentItem, commentItemStyles.blank)}>
          <div className={commentItemStyles.upper}>가장 먼저 댓글을 달아주세요!</div>
        </li>
      )}
    </ul>
  );
};

export default Comments;
