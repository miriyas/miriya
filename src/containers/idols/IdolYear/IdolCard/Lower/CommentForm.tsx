import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import cx from 'clsx';

import { createCommentDoc } from '@/services/comments';
import { TARGET_CATEGORY } from '@/types/comments.d';
import useAuth from '@/hooks/useAuth';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import PleaseLogin from '@/components/PleaseLogin';
import styles from './CommentForm.module.scss';

interface Props {
  idolId: string;
}

const CommentForm = ({ idolId }: Props) => {
  const [body, setBody] = useState('');

  const { user } = useAuth();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) return;

    createCommentDoc({
      authorId: user.uid,
      author: {
        nickname: user.displayName || `${user.email?.substring(0, 4)}**` || user.uid.substring(0, 8),
        nicknameIsFake: !user.displayName, // displayName이 없을 경우
        profileUrl: user.photoURL ?? '',
      },
      body,
      targetCategory: TARGET_CATEGORY.IDOLS,
      targetId: idolId,
    }).then(() => {
      setBody('');
    });
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setBody(e.currentTarget.value);
  };

  if (!user) {
    return (
      <div className={cx(styles.form, styles.blank)}>
        <PleaseLogin />
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.profile}>
        <ProfileImageWithFallback src={user.photoURL} uid={user.uid} alt='' size={24} />
      </div>
      <input
        type='text'
        onChange={onChange}
        value={body}
        data-lpignore='true'
        autoComplete='off'
        placeholder='댓글을 입력해주세요.'
      />
      <button type='submit'>확인</button>
    </form>
  );
};

export default CommentForm;
