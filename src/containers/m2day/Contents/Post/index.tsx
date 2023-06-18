'use client';

/* eslint-disable react/no-danger */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAtom } from 'jotai';
import cx from 'clsx';

import useAuth from '@/hooks/useAuth';
import useM2day from '../../useM2day';
import { M2PostType } from '@/types/m2day.d';
import { LIKE_TARGET_CATEGORY } from '@/types/likes.d';
import { getTimeDiffText } from '@/utils/date';
import { editModeAtom } from '@/containers/m2day/states';
import { deleteLikeAPI, postLikeAPI } from '@/services/likes';

import LeftIcon from './LeftIcon';
import Content from './Content';
import FormEdit from './FormEdit';
import PannelImage from './PannelImage';
import PannelYoutube from './PannelYoutube';
import styles from './index.module.scss';

interface Props {
  post: M2PostType;
}

const M2Post = ({ post }: Props) => {
  const { id, createdAt, content, likes, comments } = post;
  const { user, showLoginModalWhenLoggedOut } = useAuth();
  const [editMode, setEditMode] = useAtom(editModeAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [likedByMe, setLikedByMe] = useState(false); // optimistic

  const { onClickDelete, refetchPosts, isLoadingPosts } = useM2day();

  useEffect(() => {
    setLikedByMe(likes.map((like) => like.authorId).includes(user?.uid ?? ''));
  }, [isLoadingPosts, likes, user?.uid]);

  const onClickEdit = () => {
    setEditMode(post.id);
  };

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

  const onClickComment = () => {
    // console.log('me2');
  };

  return (
    <li className={styles.post}>
      <LeftIcon post={post} />
      <div className={styles.rightWing}>
        {editMode === post.id ? (
          <FormEdit me2postId={post.id} content={post.content} />
        ) : (
          <>
            <div className={styles.content}>
              <Content postId={post.id} content={content} />
              <time>{getTimeDiffText(createdAt)}</time>
              <button type='button' onClick={onClickEdit}>
                수정
              </button>
              <button type='button' onClick={onClickDelete} data-targetid={post.id}>
                삭제
              </button>
            </div>
            <PannelYoutube postId={post.id} />
            <PannelImage postId={post.id} />
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
              <button type='button' onClick={onClickComment} className={styles.comment}>
                {comments.length > 0 ? '댓글' : '댓글달기'}
                {comments.length > 0 && <span>{comments.length}</span>}
              </button>
            </div>
          </>
        )}
      </div>
    </li>
  );
};

export default M2Post;
