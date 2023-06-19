import { ChangeEventHandler, Dispatch, FormEventHandler, MouseEventHandler, SetStateAction, useState } from 'react';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';
import useBlogComment from '../useBlogComment';
import { Comment } from '@/types/comments.d';
import { filterAuthorName } from '@/utils/auth';
import { getTimeDiffText } from '@/utils/date';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import styles from './Edit.module.scss';

interface Props {
  comment: Comment;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

const CommentEditForm = ({ comment, setEditMode }: Props) => {
  const { onEditSubmit } = useBlogComment({ targetId: comment.targetId });
  const { user } = useAuth();
  const { limitLengthAlert } = useAlert();
  const [body, setBody] = useState(comment.body);

  const onClickCancel: MouseEventHandler<HTMLButtonElement> = () => {
    setEditMode(false);
    setBody(comment.body);
  };

  const onChangeBody: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const valueToSet = e.currentTarget.value;
    if (limitLengthAlert(150, valueToSet)) setBody(valueToSet);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) return;
    setEditMode(false);
    onEditSubmit(comment, body).then(() => {
      setBody(body);
    });
  };

  return (
    <form onSubmit={onSubmit} className={styles.editor}>
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
        <textarea onChange={onChangeBody} value={body} data-lpignore='true' autoComplete='off' />
        <div className={styles.lower}>
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
