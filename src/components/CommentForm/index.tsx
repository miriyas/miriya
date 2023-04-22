import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import useCameras from '@/containers/cameras/useCameras';
import { SubTargetCategoryTypes, TargetCategoryTypes, TARGET_CATEGORY } from '@/types/comments.d';
import { getAuthorData } from '@/utils';
import { postCommentAPI } from '@/services/comments';

import useCommentAndHistory from '../CommentAndHistory/useCommentAndHistory';
import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import PleaseLogin from '@/components/PleaseLogin';
import styles from './index.module.scss';

interface Props {
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId: string;
  targetName: string;
}

const CommentForm = ({ targetCategory, targetSubCategory, targetId, targetName }: Props) => {
  const { user } = useAuth();
  const { reload } = useCameras();
  const { reloadComments } = useCommentAndHistory({
    targetCategory,
    targetSubCategory,
    targetId,
  });
  const [body, setBody] = useState('');

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) return;

    if (targetSubCategory) {
      postCommentAPI({
        ...getAuthorData(user),
        body,
        targetCategory,
        targetSubCategory,
        targetId,
        targetName,
      }).then(() => {
        setBody('');
        reloadComments();
      });
      return;
    }

    postCommentAPI({
      ...getAuthorData(user),
      body,
      targetCategory,
      targetId,
      targetName,
    }).then(() => {
      setBody('');
      reloadComments();
      if (targetCategory === TARGET_CATEGORY.CAMERA) reload();
    });
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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

export default CommentForm;
