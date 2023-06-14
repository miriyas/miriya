import { MouseEventHandler, useState } from 'react';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import { Comment } from '@/types/comments.d';
import { filterAuthorName } from '@/utils/auth';
import { getTimeDiffText } from '@/utils/date';
import { deleteCommentAPI } from '@/services/comments';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import CommentEditForm from './Edit';
import itemStyles from './index.module.scss';
import styles from './Reply.module.scss';

interface Props {
  comment: Comment;
  reloadComments: () => void;
}

const Reply = ({ comment, reloadComments }: Props) => {
  const { isMine, isAdmin } = useAuth();
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
        <CommentEditForm comment={comment} setEditMode={setEditMode} />
      ) : (
        <>
          <div className={cx(itemStyles.leftWing, styles.leftWing)}>
            <div className={cx(itemStyles.profileWrapper, styles.profileWrapper)}>
              <ProfileImageWithFallback src={comment.author.profileUrl} uid={comment.authorId} alt='' size={18} />
            </div>
          </div>
          <div className={cx(itemStyles.rightWing, styles.rightWing)}>
            <div className={itemStyles.upper}>
              <p className={cx(itemStyles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
                {filterAuthorName(comment.authorId, comment.author.nickname)}
              </p>
              <time>{getTimeDiffText(comment.createdAt, true)}</time>
            </div>
            <p className={itemStyles.body}>{comment.body}</p>
            <div className={itemStyles.lower}>
              <div className={itemStyles.lowerLeft}>
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
          </div>
        </>
      )}
    </li>
  );
};

export default Reply;
