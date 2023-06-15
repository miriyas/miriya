import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import useCameras from '@/containers/cameras/useCameras';
import { TargetCategoryTypes, TARGET_CATEGORY } from '@/types/comments.d';
import { postCommentAPI } from '@/services/comments';

import useCommentAndHistory from '../CommentAndHistory/useCommentAndHistory';
import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import PleaseLogin from '@/components/PleaseLogin';
import Button from '@/components/Button';
import styles from './index.module.scss';

interface Props {
  targetCategory: TargetCategoryTypes;
  targetId: string;
  multiline?: boolean;
}

const CommentForm = ({ targetCategory, targetId, multiline }: Props) => {
  const { user } = useAuth();
  const router = useRouter();
  const { reload } = useCameras();
  const { reloadComments } = useCommentAndHistory({
    targetCategory,
    targetId,
  });
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    postCommentAPI({
      body,
      targetCategory,
      targetId,
    })
      .then(() => {
        setBody('');
        router.refresh();
        reloadComments();
        if (targetCategory === TARGET_CATEGORY.CAMERA) reload();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setBody(e.currentTarget.value);
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
      <div className={styles.profile}>
        <ProfileImageWithFallback src={user.photoURL} uid={user.uid} alt='' size={64} />
      </div>
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

export default CommentForm;
