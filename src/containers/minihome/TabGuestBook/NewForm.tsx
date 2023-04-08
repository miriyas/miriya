import { ChangeEventHandler, FormEventHandler, useState } from 'react';

import { createGuestCommentDoc } from '@/services/firebase/guestbook';
import { TARGET_CATEGORY } from '@/types/comments.d';
import useAuth from '@/hooks/useAuth';
import { getAuthorData } from '@/utils';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import PleaseLogin from '@/components/PleaseLogin';
import styles from './NewForm.module.scss';

const TabGuest = () => {
  const [body, setBody] = useState('');
  const [hidden, setHidden] = useState(false);

  const { user } = useAuth();

  const onChangeHidden: ChangeEventHandler<HTMLInputElement> = (e) => {
    setHidden(e.currentTarget.checked);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) return;

    createGuestCommentDoc({
      ...getAuthorData(user),
      body,
      hidden,
      targetCategory: TARGET_CATEGORY.GUESTBOOK,
    }).then(() => {
      setBody('');
    });
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setBody(e.currentTarget.value);
  };

  if (!user) {
    return (
      <div className={styles.form}>
        <div className={styles.rightWing}>
          <div className={styles.textareaBlank}>
            <PleaseLogin />
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.leftWing}>
        <ProfileImageWithFallback src={user.photoURL} uid={user.uid} alt='' size={96} />
      </div>
      <div className={styles.rightWing}>
        <textarea onChange={onChange} value={body} data-lpignore='true' autoComplete='off' />
        <div className={styles.buttonWrapper}>
          <label className={styles.checkboxWrapper}>
            <input type='checkbox' checked={hidden} onChange={onChangeHidden} />
            비밀로하기
          </label>
          <button type='submit'>확인</button>
        </div>
      </div>
    </form>
  );
};

export default TabGuest;
