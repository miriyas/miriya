import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import useCameras from '@/containers/cameras/useCameras';
import { SubTargetCategoryTypes, TargetCategoryTypes, TARGET_CATEGORY } from '@/types/comments.d';
import { postCommentAPI } from '@/services/comments';

import useCommentAndHistory from '../CommentAndHistory/useCommentAndHistory';
import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import PleaseLogin from '@/components/PleaseLogin';
import Button from '@/components/Button';
import defaultStyles from './index.module.scss';

interface Props {
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId: string;
  targetName: string;
  multiline?: boolean;
  overrideStyles?: {
    readonly [key: string]: string;
  };
}

const CommentForm = ({ targetCategory, targetSubCategory, targetId, targetName, multiline, overrideStyles }: Props) => {
  const styles = overrideStyles ?? defaultStyles;
  const { user } = useAuth();
  const { reload } = useCameras();
  const { reloadComments } = useCommentAndHistory({
    targetCategory,
    targetSubCategory,
    targetId,
  });
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) return;

    setLoading(false);
    postCommentAPI({
      body,
      targetCategory,
      targetSubCategory,
      targetId,
      targetName,
    })
      .then(() => {
        setBody('');
        reloadComments();
        if (targetCategory === TARGET_CATEGORY.CAMERA) reload();
      })
      .finally(() => {
        setLoading(true);
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
