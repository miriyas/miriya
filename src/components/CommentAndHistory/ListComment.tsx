import { useEffect, useState } from 'react';
import cx from 'clsx';

import { Comment, SubTargetCategoryTypes, TargetCategoryTypes } from '@/types/comments.d';
import { getCommentsInTargetRealtime } from '@/services/firebase/comments';

import ItemComment from './ItemComment';
import itemStyles from './Item.module.scss';
import styles from './List.module.scss';

interface Props {
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId: string;
}

export const ListComment = ({ targetCategory, targetSubCategory, targetId }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const unSubscribeComments = getCommentsInTargetRealtime(targetCategory, targetId, setComments, targetSubCategory);
    return () => unSubscribeComments();
  }, [targetCategory, targetSubCategory, targetId]);

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
