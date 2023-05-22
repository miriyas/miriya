'use client';

import { TARGET_CATEGORY } from '@/types/comments.d';

import CommentForm from '@/components/CommentForm';
import { ListComment } from '@/components/CommentAndHistory';
import styles from './Comments.module.scss';

interface Props {
  targetId: string;
  targetName: string;
}

const Comments = ({ targetId, targetName }: Props) => {
  return (
    <div className={styles.commentsWrapper}>
      <ListComment
        targetCategory={TARGET_CATEGORY.BLOG}
        targetId={targetId}
        overrideStyles={styles}
        withHeader
        direction='horizontal'
      />
      <CommentForm
        targetCategory={TARGET_CATEGORY.BLOG}
        targetId={targetId}
        targetName={targetName}
        overrideStyles={styles}
        multiline
      />
    </div>
  );
};

export default Comments;
