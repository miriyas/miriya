import { ChangeEventHandler, Dispatch, FormEventHandler, MouseEventHandler, SetStateAction, useState } from 'react';
import cx from 'clsx';
import { useSetAtom } from 'jotai';

import useAuth from '@/hooks/useAuth';
import { Comment } from '@/types/comments.d';
import { filterAuthorName } from '@/utils/auth';
import { getTimeDiffText } from '@/utils/date';
import { postCommentAPI } from '@/services/comments';
import { authModalAtom } from '@/components/Auth/states';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import useCommentAndHistory from '@/components/CommentAndHistory/useCommentAndHistory';
import Button from '@/components/Button';
import CommentEditForm from './Edit';
import Reply from './Reply';

interface Props {
  comment: Comment;
  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  onClickEdit: MouseEventHandler<HTMLButtonElement>;
  onClickDelete: MouseEventHandler<HTMLButtonElement>;
  styles: {
    readonly [key: string]: string;
  };
}

const ItemCommentHorizontal = ({ comment, editMode, setEditMode, onClickEdit, onClickDelete, styles }: Props) => {
  const { isMine, isAdmin, user } = useAuth();
  const [replyOpen, setReplyOpen] = useState(false);
  const [replyBody, setReplyBody] = useState('');
  const setAuthModal = useSetAtom(authModalAtom);

  const { reloadComments } = useCommentAndHistory({
    targetCategory: comment.targetCategory,
    targetSubCategory: comment.targetSubCategory,
    targetId: comment.targetId,
  });

  const onClickReply = () => {
    setReplyOpen(true);
  };

  const onChangeReply: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setReplyBody(e.currentTarget.value);
  };

  const onSubmitReply: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) {
      setAuthModal('login');
      return;
    }
    postCommentAPI({
      body: replyBody,
      targetCategory: comment.targetCategory,
      targetSubCategory: comment.targetSubCategory,
      targetId: comment.targetId,
      targetName: comment.targetName,
      parentId: comment.id,
    }).then(() => {
      setReplyOpen(false);
      setReplyBody('');
      reloadComments();
    });
  };

  return (
    <li className={styles.item} title={comment.id}>
      {editMode ? (
        <CommentEditForm comment={comment} setEditMode={setEditMode} styles={styles} direction='horizontal' />
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
              <time>{getTimeDiffText(comment.createdAt?.seconds, true)}</time>
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
                  <Reply key={rc.id} comment={rc} styles={styles} reloadComments={reloadComments} />
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </li>
  );
};

export default ItemCommentHorizontal;
