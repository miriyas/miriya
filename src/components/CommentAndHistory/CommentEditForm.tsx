import { ChangeEventHandler, Dispatch, FormEventHandler, MouseEventHandler, SetStateAction, useState } from 'react';
import cx from 'clsx';

import { Comment } from '@/types/comments.d';
import useAuth from '@/hooks/useAuth';
import useCommentAndHistory from './useCommentAndHistory';
import { filterAuthorName } from '@/utils/auth';

import styles from './Item.module.scss';
import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';

interface Props {
  comment: Comment;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

const CommentEditForm = ({ comment, setEditMode }: Props) => {
  const { onEditSubmit } = useCommentAndHistory({
    targetCategory: comment.targetCategory,
    targetSubCategory: comment.targetSubCategory,
    targetId: comment.targetId ?? '',
  });
  const { user } = useAuth();
  const [body, setBody] = useState(comment.body);

  const onClickCancel: MouseEventHandler<HTMLButtonElement> = () => {
    setEditMode(false);
    setBody(comment.body);
  };

  const onChangeEdit: ChangeEventHandler<HTMLInputElement> = (e) => {
    setBody(e.currentTarget.value);
  };

  const onEdit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) return;
    setEditMode(false);
    onEditSubmit(comment, body).then(() => {
      setBody(body);
    });
  };

  return (
    <form onSubmit={onEdit} className={styles.editor}>
      <div className={styles.upper}>
        <input type='text' onChange={onChangeEdit} value={body} data-lpignore='true' autoComplete='off' />
      </div>
      <div className={styles.lower}>
        <div className={styles.leftWing}>
          <div className={styles.profileWrapper}>
            <ProfileImageWithFallback src={comment.author.profileUrl} uid={comment.authorId} alt='' size={18} />
          </div>
          <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
            {filterAuthorName(comment.authorId, comment.author.nickname)}
          </p>
        </div>

        <div className={styles.rightWing}>
          <button type='button' onClick={onClickCancel}>
            취소
          </button>
          <button type='submit'>확인</button>
        </div>
      </div>
    </form>
  );
};

export default CommentEditForm;
