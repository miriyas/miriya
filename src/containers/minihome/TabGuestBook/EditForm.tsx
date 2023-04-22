import { ChangeEventHandler, Dispatch, FormEventHandler, MouseEventHandler, SetStateAction } from 'react';
import { useMount } from 'react-use';

import { Comment } from '@/types/comments.d';
import useAuth from '@/hooks/useAuth';
import useGuestbook from './useGuestbook';

import styles from './EditForm.module.scss';

interface Props {
  comment: Comment;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

const EditForm = ({ comment, setEditMode }: Props) => {
  const { user } = useAuth();
  const { editPostBody, setEditPostBody, editPostHidden, setEditPostHidden, submitEditGuestComment } = useGuestbook();

  useMount(() => {
    setEditPostBody(comment.body);
    setEditPostHidden(comment.hidden ?? false);
  });

  const onClickCancel: MouseEventHandler<HTMLButtonElement> = () => {
    setEditMode(false);
    setEditPostBody(comment.body);
  };

  const onChangeHidden: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditPostHidden(e.currentTarget.checked);
  };

  const onChangeEdit: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setEditPostBody(e.currentTarget.value);
  };

  const onEditSubmit: FormEventHandler<HTMLFormElement> = () => {
    if (!user) return;
    setEditMode(false);
    submitEditGuestComment(comment);
  };

  return (
    <form className={styles.form} onSubmit={onEditSubmit}>
      <textarea onChange={onChangeEdit} value={editPostBody} data-lpignore='true' autoComplete='off' />
      <div className={styles.buttonWrapper}>
        <label className={styles.checkboxWrapper}>
          <input type='checkbox' checked={editPostHidden} onChange={onChangeHidden} />
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
