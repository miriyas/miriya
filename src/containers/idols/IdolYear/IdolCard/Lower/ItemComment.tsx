import { MouseEventHandler, useState } from 'react';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import { Comment } from '@/types/comments.d';
import { getTimeDiffText } from '@/utils/date';
import { markDeleteComment } from '@/services/comments';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import CommentEditForm from './CommentEditForm';
import styles from './Item.module.scss';

interface Props {
  comment: Comment;
}

const ItemComment = ({ comment }: Props) => {
  const { isMine, isAdmin } = useAuth();
  const [editMode, setEditMode] = useState(false);

  const onClickEdit: MouseEventHandler<HTMLButtonElement> = () => {
    setEditMode(true);
  };

  const onClickDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    markDeleteComment(comment, e.currentTarget.dataset.authorId!);
  };

  const deleted = comment.deletedAt.seconds > 0;

  if (deleted) return null;

  return (
    <li className={styles.item} title={comment.id}>
      {editMode ? (
        <CommentEditForm comment={comment} setEditMode={setEditMode} />
      ) : (
        <>
          <div className={styles.upper}>
            <p>{comment.body}</p>
          </div>
          <div className={styles.lower}>
            <div className={styles.leftWing}>
              <div className={styles.profileWrapper}>
                <ProfileImageWithFallback src={comment.author.profileUrl} uid={comment.authorId} alt='' size={18} />
              </div>
              <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
                {comment.author.nickname}
              </p>
            </div>
            <div className={styles.rightWing}>
              {!editMode && (isAdmin || isMine(comment.authorId)) && (
                <>
                  <button type='button' onClick={onClickEdit}>
                    수정
                  </button>
                  {!deleted && (
                    <button
                      type='button'
                      onClick={onClickDelete}
                      data-id={comment.id}
                      data-author-id={comment.authorId}
                    >
                      삭제
                    </button>
                  )}
                </>
              )}
              <time>{getTimeDiffText(comment.createdAt?.seconds, true)}</time>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default ItemComment;
