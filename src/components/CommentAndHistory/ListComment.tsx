import cx from 'clsx';

import useCommentAndHistory from './useCommentAndHistory';
import { SubTargetCategoryTypes, TargetCategoryTypes } from '@/types/comments.d';

import Loading from '@/components/Loading';
import ItemComment from './Item';
import liststyles from './List.module.scss';
import defaultStyles from './Item/index.module.scss';

interface Props {
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId: string;
  withHeader?: boolean;
  direction?: 'horizontal' | 'vertical';
  overrideStyles?: {
    readonly [key: string]: string;
  };
}

export const ListComment = ({
  targetCategory,
  targetSubCategory,
  targetId,
  withHeader,
  direction,
  overrideStyles,
}: Props) => {
  const styles = overrideStyles ?? defaultStyles;

  const { comments, isLoadingComments } = useCommentAndHistory({ targetCategory, targetSubCategory, targetId });

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
          댓글 <span>{comments.length}</span>
        </div>
      )}
      <ul className={cx(styles.comments)}>
        {comments.map((comment) => (
          <ItemComment key={comment.id} comment={comment} overrideStyles={overrideStyles} direction={direction} />
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
