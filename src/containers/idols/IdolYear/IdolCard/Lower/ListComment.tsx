import { useEffect, useState } from 'react';
import cx from 'clsx';

import { IdolType } from '@/types/idols.d';
import { TARGET_CATEGORY, Comment } from '@/types/comments.d';
import { getCommentsInTargetRealtime } from '@/services/firebase/comments';

import ItemComment from './ItemComment';
import itemStyles from './Item.module.scss';
import styles from './List.module.scss';

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
    <ul className={styles.list}>
      {comments.map((comment) => (
        <ItemComment key={comment.id} comment={comment} />
      ))}
      {comments.length === 0 && (
        <li className={cx(itemStyles.item, itemStyles.blank)}>
          <div className={itemStyles.upper}>가장 먼저 댓글을 달아주세요!</div>
        </li>
      )}
    </ul>
  );
};

export default Comments;
