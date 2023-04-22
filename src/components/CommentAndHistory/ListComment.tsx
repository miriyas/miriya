import cx from 'clsx';

import useCommentAndHistory from './useCommentAndHistory';
import { SubTargetCategoryTypes, TargetCategoryTypes } from '@/types/comments.d';

import Loading from '@/components/Loading';
import ItemComment from './ItemComment';
import liststyles from './List.module.scss';
import styles from './Item.module.scss';

interface Props {
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId: string;
}

export const ListComment = ({ targetCategory, targetSubCategory, targetId }: Props) => {
  const { comments, isLoadingComments } = useCommentAndHistory({ targetCategory, targetSubCategory, targetId });

  if (isLoadingComments) {
    return (
      <div className={cx(liststyles.list, liststyles.loading)}>
        <Loading small />
      </div>
    );
  }

  return (
    <ul className={liststyles.list}>
      {comments.map((comment) => (
        <ItemComment key={comment.id} comment={comment} />
      ))}
      {comments.length === 0 && (
        <li className={cx(styles.item, styles.blank)}>
          <div className={styles.upper}>가장 먼저 댓글을 달아주세요!</div>
        </li>
      )}
    </ul>
  );
};
