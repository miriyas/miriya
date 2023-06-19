import { MouseEventHandler, useState } from 'react';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import { Comment } from '@/types/comments.d';
import { filterAuthorName } from '@/utils/auth';
import { getTimeDiffText } from '@/utils/date';
import { deleteCommentAPI } from '@/services/comments';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import CommentEditForm from '@/components/CommentAndHistory/Item/Edit';

interface Props {
  comment: Comment;
  styles: {
    readonly [key: string]: string;
  };
  reloadComments: () => void;
}

const Reply = ({ comment, styles, reloadComments }: Props) => {
  const { isMineOrAdmin } = useAuth();
  const [editMode, setEditMode] = useState(false);

  const onClickEdit: MouseEventHandler<HTMLButtonElement> = () => {
    setEditMode(true);
  };

  const onClickDelete: MouseEventHandler<HTMLButtonElement> = () => {
    deleteCommentAPI(comment.id).then(() => {
      reloadComments();
    });
  };

  return (
    <li className={styles.replyItem}>
      {editMode ? (
        <CommentEditForm comment={comment} setEditMode={setEditMode} styles={styles} />
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
              <time>{getTimeDiffText(comment.createdAt, true)}</time>
            </div>
            <p className={styles.body}>{comment.body}</p>
            <div className={styles.lower}>
              <div className={styles.lowerLeft}>
                {!editMode && isMineOrAdmin(comment.authorId) && (
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
          </div>
        </>
      )}
    </li>
  );
};

export default Reply;
