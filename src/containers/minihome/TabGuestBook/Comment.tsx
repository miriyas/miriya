import { MouseEventHandler, useState } from 'react';
import cx from 'clsx';
import Image from 'next/image';

import { Comment } from '@/types/comments.d';
import { getTimeDiffText } from '@/utils/date';
import useAuth from '@/hooks/useAuth';
import useGuestbook from './useGuestbook';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import EditForm from './EditForm';
import styles from './Comment.module.scss';

interface Props {
  comment: Comment;
}

const CommentItem = ({ comment }: Props) => {
  const { submitEditGuestCommentHidden, deleteGuestComment } = useGuestbook();
  const { isMine, isAdmin } = useAuth();
  const [editMode, setEditMode] = useState(false);

  const onClickEdit: MouseEventHandler<HTMLButtonElement> = () => {
    setEditMode(true);
  };

  const onClickDelete: MouseEventHandler<HTMLButtonElement> = () => {
    deleteGuestComment(comment);
  };

  const onClickHide: MouseEventHandler<HTMLButtonElement> = () => {
    submitEditGuestCommentHidden(comment, true);
  };

  const onClickShow: MouseEventHandler<HTMLButtonElement> = () => {
    submitEditGuestCommentHidden(comment, false);
  };

  const deleted = comment.deletedAt.seconds > 0;

  if (!isAdmin && comment.hidden && !isMine(comment.authorId)) return null;
  if (!isAdmin && deleted) return null;

  return (
    <li
      className={cx(styles.commentItem, {
        [styles.deleted]: deleted,
        [styles.hidden]: comment.hidden,
      })}
    >
      <div className={styles.upper}>
        <div className={styles.leftWing}>
          <p className={styles.number}>No.{comment.commentNoInCategory}</p>
          <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
            {comment.author.nickname}
          </p>
          {deleted && <time>({getTimeDiffText(comment.deletedAt.seconds, true)} 삭제됨)</time>}
          {!deleted && comment.updatedAt?.seconds && (
            <time>({getTimeDiffText(comment.updatedAt.seconds, true)} 수정됨)</time>
          )}
          {!deleted && !comment.updatedAt && comment.createdAt?.seconds && (
            <time>({getTimeDiffText(comment.createdAt.seconds, true)})</time>
          )}
        </div>
        {!editMode && (isAdmin || isMine(comment.authorId)) && (
          <div className={styles.rightWing}>
            <button type='button' onClick={onClickEdit}>
              수정
            </button>
            {comment.hidden ? (
              <button type='button' onClick={onClickShow}>
                공개하기
              </button>
            ) : (
              <button type='button' onClick={onClickHide}>
                비밀로하기
              </button>
            )}
            {!deleted && (
              <button type='button' onClick={onClickDelete} data-id={comment.id} data-author-id={comment.authorId}>
                삭제
              </button>
            )}
          </div>
        )}
      </div>
      <div className={styles.lower}>
        <div className={styles.leftWing}>
          <ProfileImageWithFallback src={comment.author.profileUrl} uid={comment.authorId} alt='' size={96} />
        </div>
        <div className={styles.rightWing}>
          {editMode ? (
            <EditForm comment={comment} setEditMode={setEditMode} />
          ) : (
            <div className={styles.bodyWrapper}>
              {comment.hidden && (
                <div className={styles.hiddenInfo}>
                  <Image src='/images/minihome/lock.png' alt='' width={24} height={24} className={styles.image} />
                  <p className={styles.status}>비밀이야</p>
                  <p className={styles.info}>(이 글은 홈 주인과 작성자만 볼 수 있어요)</p>
                </div>
              )}
              <p className={styles.body}>{comment.body}</p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default CommentItem;
