import cx from 'clsx';

import useCommentAndHistory from './useCommentAndHistory';
import { TargetCategoryTypes } from '@/types/comments';

import Loading from '@/components/Loading';
import ItemComment from './Item';
import liststyles from './List.module.scss';
import styles from './Item/index.module.scss';

interface Props {
  targetCategory: TargetCategoryTypes;
  targetId: string;
  withHeader?: boolean;
}

export const ListComment = ({ targetCategory, targetId, withHeader }: Props) => {
  const { comments, isLoadingComments } = useCommentAndHistory({ targetCategory, targetId });

  if (isLoadingComments) {
    return (
      <div className={cx(liststyles.list, liststyles.loading, styles.commentList)}>
        <Loading small />
      </div>
    );
  }

  return (
    <div className={cx(liststyles.list, styles.commentList)}>
      {withHeader && (
        <div className={styles.header}>
          댓글 <span>{comments.length + comments.reduce((acc, c) => acc + (c.children?.length || 0), 0)}</span>
        </div>
      )}
      <ul className={cx(liststyles.comments)}>
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
