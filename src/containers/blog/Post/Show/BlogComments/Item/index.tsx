import { ChangeEventHandler, FormEventHandler, MouseEventHandler, useState } from 'react';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import { Comment } from '@/types/comments.d';
import { deleteCommentAPI, postCommentAPI } from '@/services/comments';
import { filterAuthorName } from '@/utils/auth';
import { getTimeDiffText } from '@/utils/date';
import useBlogComment from '../useBlogComment';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import Button from '@/components/Button';
import CommentEditForm from './Edit';
import Reply from './Reply';
import styles from './index.module.scss';

interface Props {
  comment: Comment;
}

const ItemComment = ({ comment }: Props) => {
  const { isMine, isAdmin, showLoginModalWhenLoggedOut } = useAuth();
  const { reloadComments } = useBlogComment({ targetId: comment.targetId });
  const [editMode, setEditMode] = useState(false);

  const onClickEdit: MouseEventHandler<HTMLButtonElement> = () => {
    setEditMode(true);
  };

  const onClickDelete: MouseEventHandler<HTMLButtonElement> = () => {
    deleteCommentAPI(comment.id).then(() => {
      reloadComments();
    });
  };

  const [replyOpen, setReplyOpen] = useState(false);
  const [replyBody, setReplyBody] = useState('');

  const onClickReply = () => {
    setReplyOpen(true);
  };

  const onChangeReply: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setReplyBody(e.currentTarget.value);
  };

  const onSubmitReply: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    showLoginModalWhenLoggedOut(() => {
      postCommentAPI({
        body: replyBody,
        targetCategory: comment.category,
        targetId: comment.targetId,
        parentId: comment.id,
      }).then(() => {
        setReplyOpen(false);
        setReplyBody('');
        reloadComments();
      });
    });
  };

  const deleted = comment.deletedAt !== null;

  if (deleted) return null;

  return (
    <li className={cx(styles.item, 'horizontal')} title={comment.id}>
      {editMode ? (
        <CommentEditForm comment={comment} setEditMode={setEditMode} />
      ) : (
        <>
          <div className={styles.leftWing}>
            <div className={styles.profileWrapper}>
              <ProfileImageWithFallback src={comment.author.profileUrl} uid={comment.authorId} alt='' size={36} />
            </div>
          </div>
          <div className={styles.rightWing}>
            <div className={styles.upper}>
              <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
                {filterAuthorName(comment.authorId, comment.author.nickname)}
              </p>
              <time>{getTimeDiffText(comment.createdAt, true)}</time>
            </div>
            <p className={styles.body}>{comment.body}</p>
            <div className={styles.lower}>
              <div className={styles.lowerLeft}>
                {!editMode && (isAdmin || isMine(comment.authorId)) && (
                  <>
                    <button type='button' onClick={onClickEdit}>
                      수정
                    </button>
                    <button type='button' onClick={onClickDelete}>
                      삭제
                    </button>
                  </>
                )}
              </div>
              <div className={styles.lowerRight}>
                {!replyOpen && (
                  <button type='button' onClick={onClickReply}>
                    대댓글
                  </button>
                )}
              </div>
            </div>
            {replyOpen && (
              <form className={styles.replyForm} onSubmit={onSubmitReply}>
                <textarea onChange={onChangeReply} value={replyBody} data-lpignore='true' autoComplete='off' />
                <Button type='submit' skin='primary'>
                  확인
                </Button>
              </form>
            )}
            {comment.children && comment.children.length > 0 && (
              <ul className={styles.replies}>
                {comment.children.map((rc) => (
                  <Reply key={rc.id} comment={rc} reloadComments={reloadComments} />
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </li>
  );
};

export default ItemComment;
