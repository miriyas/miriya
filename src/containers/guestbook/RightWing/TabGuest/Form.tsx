import { ChangeEventHandler, FormEventHandler, useState } from 'react';

import { createCommentDoc } from '@/services/guestbook';
import { TARGET_CATEGORY } from '@/types/comments.d';
import useAuth from '@/hooks/useAuth';

import styles from './Form.module.scss';
import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';

const TabGuest = () => {
  const [body, setBody] = useState('');

  const { user } = useAuth();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) return;

    createCommentDoc({
      authorId: user.uid,
      author: {
        nickname: user.displayName || user.uid.substring(0, 8),
        nicknameIsFake: !user.displayName, // displayName이 없을 경우
        profileUrl: user.photoURL ?? '',
      },
      body,
      targetCategory: TARGET_CATEGORY.GUESTBOOK,
    }).then(() => {
      setBody('');
    });
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setBody(e.currentTarget.value);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.leftWing}>
        <ProfileImageWithFallback src={user?.photoURL} uid='' alt='' size={96} />
      </div>
      <div className={styles.rightWing}>
        <textarea onChange={onChange} value={body} data-lpignore='true' autoComplete='off' />
        <div className={styles.buttonWrapper}>
          <button type='submit'>확인</button>
        </div>
      </div>
    </form>
  );
};

export default TabGuest;
