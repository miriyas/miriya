'use client';

import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';
import useBlogComment from './useBlogComment';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { postCommentAPI } from '@/services/comments';

import PleaseLogin from '@/components/PleaseLogin';
import Button from '@/components/Button';
import styles from './NewForm.module.scss';

interface Props {
  targetId: string;
  multiline?: boolean;
}

const NewForm = ({ targetId, multiline }: Props) => {
  const { user } = useAuth();
  const { limitLengthAlert } = useAlert();
  const { reloadComments } = useBlogComment({ targetId });
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) return;

    setLoading(false);
    postCommentAPI({
      body,
      targetCategory: TARGET_CATEGORY.BLOG,
      targetId,
    })
      .then(() => {
        setBody('');
        reloadComments();
      })
      .finally(() => {
        setLoading(true);
      });
  };

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const valueToSet = e.currentTarget.value;
    if (limitLengthAlert(1000, valueToSet)) setBody(valueToSet);
  };

  if (!user) {
    return (
      <div className={cx(styles.commentNewForm, styles.blank)}>
        <PleaseLogin />
      </div>
    );
  }

  return (
    <form className={styles.commentNewForm} onSubmit={onSubmit}>
      {multiline ? (
        <textarea
          onChange={onChange}
          value={body}
          data-lpignore='true'
          autoComplete='off'
          placeholder='댓글을 입력해주세요.'
        />
      ) : (
        <input
          type='text'
          onChange={onChange}
          value={body}
          data-lpignore='true'
          autoComplete='off'
          placeholder='댓글을 입력해주세요.'
        />
      )}
      <Button type='submit' disabled={loading} skin='primary' className={styles.submit}>
        등록
      </Button>
    </form>
  );
};

export default NewForm;
