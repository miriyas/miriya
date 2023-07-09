'use client';

import { useQuery } from '@tanstack/react-query';
import cx from 'clsx';
import { useState } from 'react';

import { LIKE_TARGET_CATEGORY } from '@/types/likes.d';
import { deleteLikeAPI, getLikesApi, postLikeAPI } from '@/services/likes';
import useAuth from '@/hooks/useAuth';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import Button from '@/components/Button';
import styles from './index.module.scss';

interface Props {
  targetId: string;
}

const LikeButton = ({ targetId }: Props) => {
  const { user, isAdmin, showLoginModalWhenLoggedOut } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [likedByMe, setLikedByMe] = useState(false); // optimistic

  const { data: likes = [], refetch: refetchLikes } = useQuery({
    queryKey: ['getLikesApi', targetId],
    queryFn: () =>
      getLikesApi({
        targetCategory: LIKE_TARGET_CATEGORY.BLOG_POST,
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
      targetCategory: LIKE_TARGET_CATEGORY.BLOG_POST,
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
      targetCategory: LIKE_TARGET_CATEGORY.BLOG_POST,
      targetId,
    })
      .then(() => {
        refetchLikes();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onClickLike = () => {
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
      <Button className={styles.like} skin='ghost' onClick={onClickLike} disabled={isLoading}>
        <div className={cx(styles.fancyHeart, { [styles.active]: likedByMe })}>
          <div className={styles.heart} />
        </div>
        좋아요
        <span>{likes.length > 0 && likes.length}</span>
      </Button>
      {isAdmin && (
        <ul className={styles.likers}>
          {likes.map((like) => (
            <li key={like.id}>
              <div className={styles.profileWrapper}>
                <ProfileImageWithFallback src={like.author.profileUrl} uid={like.authorId} alt='' size={14} />
              </div>
              {like.author.nickname}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default LikeButton;
