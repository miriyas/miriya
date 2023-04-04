import { MouseEventHandler } from 'react';
import cx from 'clsx';

import { deleteComment } from '@/services/guestbook';
import { Comment } from '@/types/comments.d';
import { getTimeDiffText } from '@/utils/date';

import styles from './index.module.scss';
import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';

interface Props {
  comment: Comment;
  no: number;
}

const CommentItem = ({ comment, no }: Props) => {
  const onClickDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    deleteComment(e.currentTarget.dataset.id!);
  };

  return (
    <li>
      <div className={styles.upper}>
        <div className={styles.leftWing}>
          <p className={styles.number}>No.{no}</p>
          <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
            {comment.author.nickname}
          </p>
          {comment.createdAt?.seconds && <time>({getTimeDiffText(comment.createdAt.seconds, true)})</time>}
        </div>
        <div className={styles.rightWing}>
          <button type='button'>비밀로하기</button>|
          <button type='button' onClick={onClickDelete} data-id={comment.id}>
            삭제
          </button>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.leftWing}>
          <ProfileImageWithFallback src={comment.author.profileUrl} uid={comment.authorId} alt='' size={96} />
        </div>
        <div className={styles.rightWing}>{comment.body}</div>
      </div>
    </li>
  );
};

export default CommentItem;
