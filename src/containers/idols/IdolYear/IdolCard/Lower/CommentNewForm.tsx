import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import cx from 'clsx';

import { createCommentDoc } from '@/services/firebase/comments';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { getAuthorData } from '@/utils';
import useAuth from '@/hooks/useAuth';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import PleaseLogin from '@/components/PleaseLogin';
import styles from './CommentNewForm.module.scss';

interface Props {
  idolId: string;
}

const CommentNewForm = ({ idolId }: Props) => {
  const [body, setBody] = useState('');

  const { user } = useAuth();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) return;

    createCommentDoc({
      ...getAuthorData(user),
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
    <form className={styles.commentNewForm} onSubmit={onSubmit}>
      <div className={styles.profile}>
        <ProfileImageWithFallback src={user.photoURL} uid={user.uid} alt='' size={32} />
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

export default CommentNewForm;
