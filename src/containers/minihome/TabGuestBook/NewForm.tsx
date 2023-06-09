'use client';

import { ChangeEventHandler, FormEventHandler } from 'react';
import { useAtom } from 'jotai';

import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';
import useGuestbook, { newPostBodyAtom, newPostHiddenAtom } from './useGuestbook';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import PleaseLogin from '@/components/PleaseLogin';
import styles from './NewForm.module.scss';
import Loading from '@/components/Loading';

const NewForm = () => {
  const { user, isLoadingMe } = useAuth();
  const { limitLengthAlert } = useAlert();
  const { submitNewGuestbook } = useGuestbook();
  const [newPostBody, setNewPostBody] = useAtom(newPostBodyAtom);
  const [newPostHidden, setNewPostHidden] = useAtom(newPostHiddenAtom);

  const onChangeHidden: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewPostHidden(e.currentTarget.checked);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submitNewGuestbook();
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const valueToSet = e.currentTarget.value;
    if (limitLengthAlert(500, valueToSet)) setNewPostBody(valueToSet);
  };

  if (!user) {
    return (
      <div className={styles.form}>
        <div className={styles.rightWing}>
          <div className={styles.textareaBlank}>{isLoadingMe ? <Loading small /> : <PleaseLogin />}</div>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.leftWing}>
        <ProfileImageWithFallback src={user.photoURL} uid={user.uid} alt='' size={192} />
      </div>
      <div className={styles.rightWing}>
        <textarea onChange={onChange} value={newPostBody} data-lpignore='true' autoComplete='off' />
        <div className={styles.buttonWrapper}>
          <label className={styles.checkboxWrapper}>
            <input type='checkbox' checked={newPostHidden} onChange={onChangeHidden} />
            비밀로하기
          </label>
          <button type='submit'>확인</button>
        </div>
      </div>
    </form>
  );
};

export default NewForm;
