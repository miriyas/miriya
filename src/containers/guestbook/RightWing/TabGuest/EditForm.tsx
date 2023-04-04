import { ChangeEventHandler, Dispatch, FormEventHandler, MouseEventHandler, SetStateAction, useState } from 'react';

import { editCommentDoc } from '@/services/guestbook';
import { Comment } from '@/types/comments.d';
import useAuth from '@/hooks/useAuth';

import styles from './EditForm.module.scss';

interface Props {
  comment: Comment;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

const EditForm = ({ comment, setEditMode }: Props) => {
  const { user } = useAuth();
  const [body, setBody] = useState(comment.body);
  const [hidden, setHidden] = useState(comment.hidden ?? false);

  const onClickCancel: MouseEventHandler<HTMLButtonElement> = () => {
    setEditMode(false);
    setBody(comment.body);
  };

  const onClickHidden: MouseEventHandler<HTMLInputElement> = (e) => {
    setHidden(e.currentTarget.checked);
  };

  const onChangeEdit: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setBody(e.currentTarget.value);
  };

  const onEditSubmit: FormEventHandler<HTMLFormElement> = () => {
    if (!user) return;
    setEditMode(false);
    editCommentDoc({
      ...comment,
      body,
      hidden,
    }).then(() => {
      setBody(body);
    });
  };

  return (
    <form className={styles.form} onSubmit={onEditSubmit}>
      <textarea onChange={onChangeEdit} value={body} data-lpignore='true' autoComplete='off' />
      <div className={styles.buttonWrapper}>
        <label className={styles.checkboxWrapper}>
          <input type='checkbox' checked={hidden} onClick={onClickHidden} />
          비밀로하기
        </label>
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

export default EditForm;
