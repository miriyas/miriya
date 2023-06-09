import { MouseEventHandler, useState } from 'react';
import cx from 'clsx';
import { useRouter } from 'next/navigation';

import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';
import useCommentAndHistory from '../useCommentAndHistory';
import { Comment, TARGET_CATEGORY } from '@/types/comments.d';
import { deleteCommentAPI } from '@/services/comments';
import useIdols from '@/containers/idols/useIdols';
import useCameras from '@/containers/cameras/useCameras';
import { filterAuthorName } from '@/utils/auth';
import { getTimeDiffText } from '@/utils/date';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import CommentEditForm from './Edit';
import styles from './index.module.scss';

interface Props {
  comment: Comment;
}

const ItemComment = ({ comment }: Props) => {
  const { isMineOrAdmin } = useAuth();
  const { deleteWarningAlert } = useAlert();
  const router = useRouter();
  const { reload } = useCameras();
  const { refetchIdols } = useIdols();
  const { reloadComments } = useCommentAndHistory({
    targetCategory: comment.category,
    targetId: comment.targetId ?? 'undefined',
  });
  const [editMode, setEditMode] = useState(false);

  const onClickEdit: MouseEventHandler<HTMLButtonElement> = () => {
    setEditMode(true);
  };

  const onClickDelete: MouseEventHandler<HTMLButtonElement> = () => {
    deleteWarningAlert().then(() => {
      deleteCommentAPI(comment.id).then(async () => {
        router.refresh();
        reloadComments();
        if (comment.category === TARGET_CATEGORY.IDOLS) refetchIdols();
        if (comment.category === TARGET_CATEGORY.CAMERA) reload();
      });
    });
  };

  const deleted = comment.deletedAt !== null;

  if (deleted) return null;

  return (
    <li className={cx(styles.item, 'vertical')} title={comment.id}>
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
              <time>{getTimeDiffText(comment.createdAt, true)}</time>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default ItemComment;
