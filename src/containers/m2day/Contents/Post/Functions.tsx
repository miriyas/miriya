'use client';

import { useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import cx from 'clsx';
import Image from 'next/image';

import { commentOpenAtom } from '@/containers/m2day/states';
import useAuth from '@/hooks/useAuth';
import useM2day from '../../useM2day';
import { M2PostType } from '@/types/m2day.d';
import { LIKE_TARGET_CATEGORY } from '@/types/likes.d';
import { deleteLikeAPI, postLikeAPI } from '@/services/likes';

import styles from './Functions.module.scss';

interface Props {
  post: M2PostType;
}

const Functions = ({ post }: Props) => {
  const { id, likes, comments } = post;
  const { user, showLoginModalWhenLoggedOut } = useAuth();
  const setCommentOpen = useSetAtom(commentOpenAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [likedByMe, setLikedByMe] = useState(false); // optimistic

  const { refetchPosts, isLoadingPosts } = useM2day();

  useEffect(() => {
    setLikedByMe(likes.map((like) => like.authorId).includes(user?.uid ?? ''));
  }, [isLoadingPosts, likes, user?.uid]);

  const doLike = () => {
    setLikedByMe(true);
    setIsLoading(true);
    postLikeAPI({
      targetCategory: LIKE_TARGET_CATEGORY.M2_POST,
      targetId: id,
    })
      .then(() => {
        refetchPosts();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const doUnLike = () => {
    setLikedByMe(false);
    setIsLoading(true);
    deleteLikeAPI({
      targetCategory: LIKE_TARGET_CATEGORY.M2_POST,
      targetId: id,
    })
      .then(() => {
        refetchPosts();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onClickMeToo = () => {
    showLoginModalWhenLoggedOut(() => {
      if (likedByMe) {
        doUnLike();
        return;
      }
      doLike();
    });
  };

  const onClickComments = () => {
    setCommentOpen((prev) => (prev === post.id ? undefined : post.id));
  };

  return (
    <div className={styles.functions}>
      <button
        type='button'
        onClick={onClickMeToo}
        className={cx(styles.me2, { [styles.active]: likedByMe })}
        disabled={isLoading}
      >
        {likedByMe ? (
          <Image className={styles.logo} src='/images/m2day/me2invert.png' width={50} height={58} alt='' />
        ) : (
          <Image className={styles.logo} src='/images/m2day/me2.png' width={50} height={58} alt='' />
        )}
        미투
      </button>
      <button type='button' onClick={onClickMeToo} className={styles.me2Count}>
        {likes.length}
      </button>
      <button type='button' onClick={onClickComments} className={styles.comment}>
        {comments.length > 0 ? '댓글' : '댓글달기'}
        {comments.length > 0 && <span>{comments.length}</span>}
      </button>
    </div>
  );
};

export default Functions;
