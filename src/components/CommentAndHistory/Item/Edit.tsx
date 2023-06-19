import { ChangeEventHandler, Dispatch, FormEventHandler, MouseEventHandler, SetStateAction, useState } from 'react';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';
import useCommentAndHistory from '../useCommentAndHistory';
import { filterAuthorName } from '@/utils/auth';
import { Comment } from '@/types/comments.d';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';

interface Props {
  comment: Comment;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  styles: {
    readonly [key: string]: string;
  };
}

const CommentEditForm = ({ comment, setEditMode, styles }: Props) => {
  const { user } = useAuth();
  const { limitLengthAlert } = useAlert();
  const { onEditSubmit } = useCommentAndHistory({
    targetCategory: comment.category,
    targetId: comment.targetId ?? '',
  });
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
    <form onSubmit={onSubmit} className={cx(styles.editor, 'vertical')}>
      <div className={styles.upper}>
        <input type='text' onChange={onChangeBody} value={body} data-lpignore='true' autoComplete='off' />
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
