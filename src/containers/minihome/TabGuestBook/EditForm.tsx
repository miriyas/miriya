import { ChangeEventHandler, Dispatch, FormEventHandler, MouseEventHandler, SetStateAction } from 'react';
import { useMount } from 'react-use';

import useAuth from '@/hooks/useAuth';
import useGuestbook from './useGuestbook';
import { Guestbook } from '@/types/minihome.d';

import styles from './EditForm.module.scss';

interface Props {
  guestbook: Guestbook;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

const EditForm = ({ guestbook, setEditMode }: Props) => {
  const { user } = useAuth();
  const { editPostBody, setEditPostBody, editPostHidden, setEditPostHidden, submitEditGuestbook } = useGuestbook();

  useMount(() => {
    setEditPostBody(guestbook.body);
    setEditPostHidden(guestbook.hidden ?? false);
  });

  const onClickCancel: MouseEventHandler<HTMLButtonElement> = () => {
    setEditMode(false);
    setEditPostBody(guestbook.body);
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
    submitEditGuestbook(guestbook);
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
