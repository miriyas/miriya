'use client';

import { useQuery } from '@tanstack/react-query';
import cx from 'clsx';
import { MouseEventHandler, useState } from 'react';

import { LIKE_TARGET_CATEGORY } from '@/types/likes.d';
import { deleteLikeAPI, getLikesApi, postLikeAPI } from '@/services/likes';
import useAuth from '@/hooks/useAuth';

import styles from './index.module.scss';

interface Props {
  targetId: string;
}

const LikeButton = ({ targetId }: Props) => {
  const { user, showLoginModalWhenLoggedOut } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [likedByMe, setLikedByMe] = useState(false); // optimistic

  const { data: likes = [], refetch: refetchLikes } = useQuery({
    queryKey: ['getLikesApi', targetId],
    queryFn: () =>
      getLikesApi({
        targetCategory: LIKE_TARGET_CATEGORY.IDOLS,
        targetId,
      }).then((res) => {
        setLikedByMe(res.data.map((like) => like.authorId).includes(user?.uid ?? ''));
        return res.data;
      }),
  });

  const doLike = () => {
    setLikedByMe(true);
    setIsLoading(true);
    postLikeAPI({
      targetCategory: LIKE_TARGET_CATEGORY.IDOLS,
      targetId,
    })
      .then(() => {
        refetchLikes();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const doUnLike = () => {
    setLikedByMe(false);
    setIsLoading(true);
    deleteLikeAPI({
      targetCategory: LIKE_TARGET_CATEGORY.IDOLS,
      targetId,
    })
      .then(() => {
        refetchLikes();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onClickLike: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    showLoginModalWhenLoggedOut(() => {
      if (likedByMe) {
        doUnLike();
        return;
      }
      doLike();
    });
  };

  return (
    <aside className={cx(styles.likeButton, { [styles.liked]: likes.length > 0, [styles.likedByMe]: likedByMe })}>
      <button type='button' className={styles.like} onClick={onClickLike} disabled={isLoading}>
        {likedByMe ? '♥' : '♡'}
        <span>{likes.length > 0 && likes.length}</span>
      </button>
    </aside>
  );
};

export default LikeButton;
