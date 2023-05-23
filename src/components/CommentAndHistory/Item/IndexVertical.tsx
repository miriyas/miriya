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

const ItemCommentVertical = ({ comment, editMode, setEditMode, onClickEdit, onClickDelete, styles }: Props) => {
  const { isMine, isAdmin } = useAuth();

  return (
    <li className={styles.item} title={comment.id}>
      {editMode ? (
        <CommentEditForm comment={comment} setEditMode={setEditMode} styles={styles} />
      ) : (
        <>
          <div className={styles.upper}>
            <p>{comment.body}</p>
          </div>
          <div className={styles.lower}>
            <div className={styles.leftWing}>
              <div className={styles.profileWrapper}>
                <ProfileImageWithFallback src={comment.author.profileUrl} uid={comment.authorId} alt='' size={36} />
              </div>
              <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
                {filterAuthorName(comment.authorId, comment.author.nickname)}
              </p>
            </div>
            <div className={styles.rightWing}>
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
              <time>{getTimeDiffText(comment.createdAt?.seconds, true)}</time>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default ItemCommentVertical;
