import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import { Comment } from '@/types/comments.d';
import { filterAuthorName } from '@/utils/auth';
import { getTimeDiffText } from '@/utils/date';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import CommentEditForm from './Edit';

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
  const { isMine, isAdmin } = useAuth();

  return (
    <li className={styles.item} title={comment.id}>
      {editMode ? (
        <CommentEditForm comment={comment} setEditMode={setEditMode} styles={styles} direction='horizontal' />
      ) : (
        <>
          <div className={styles.leftWing}>
            <div className={styles.profileWrapper}>
              <ProfileImageWithFallback src={comment.author.profileUrl} uid={comment.authorId} alt='' size={18} />
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
          </div>
        </>
      )}
    </li>
  );
};

export default ItemCommentHorizontal;
