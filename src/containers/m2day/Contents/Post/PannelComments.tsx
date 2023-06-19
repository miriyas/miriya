import cx from 'clsx';
import { useQuery } from '@tanstack/react-query';
import { ChangeEventHandler, FormEventHandler, MouseEventHandler, useState } from 'react';

import useAlert from '@/hooks/useAlert';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { deleteCommentAPI, getCommentsApi, postCommentAPI } from '@/services/comments';
import { getTimeDiffText } from '@/utils/date';
import useM2day from '@/containers/m2day/useM2day';

import styles from './Pannel.module.scss';
import Loading from '@/components/Loading';

interface Props {
  postId: string;
}

const PannelComments = ({ postId }: Props) => {
  const { addAlert } = useAlert();
  const [newComment, setNewComment] = useState('');
  const [inSubmit, setInsubmit] = useState(false);
  const [inDelete, setInDelete] = useState(false);
  const { refetchPosts } = useM2day();

  const {
    data: comments = [],
    refetch: refetchComments,
    isLoading: isLoadingComments,
  } = useQuery(['getCommentsApi', TARGET_CATEGORY.M2_POST, postId], () => {
    return getCommentsApi({ targetCategory: TARGET_CATEGORY.M2_POST, targetId: postId }).then((res) => res.data);
  });

  const onChangeComment: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewComment(e.currentTarget.value);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    setInsubmit(true);
    postCommentAPI({
      targetCategory: TARGET_CATEGORY.M2_POST,
      targetId: postId,
      body: newComment,
    })
      .then(() => {
        refetchComments();
        setNewComment('');
      })
      .finally(() => {
        setInsubmit(false);
      });
  };

  const onClickDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    const commentId = e.currentTarget.dataset.commentid;

    if (!commentId) return;
    addAlert({
      message: '진짜 삭제하시겠습니까?',
      cancelLabel: '낙장불입',
      onConfirm: () => {
        setInDelete(true);
        deleteCommentAPI(commentId)
          .then(() => {
            refetchComments();
            refetchPosts();
          })
          .finally(() => {
            setInDelete(false);
          });
      },
    });
  };

  return (
    <div className={cx(styles.pannel, styles.commentsPannel)}>
      {isLoadingComments && <Loading small />}
      <ul className={styles.comments}>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <p className={styles.nickname}>{comment.author.nickname}</p>
              <p className={styles.body}>
                {comment.body}
                <time>{getTimeDiffText(comment.createdAt)}</time>
                <button type='button' disabled={inDelete} onClick={onClickDelete} data-commentid={comment.id}>
                  삭제
                </button>
              </p>
            </li>
          );
        })}
        <form className={styles.form} onSubmit={onSubmit}>
          <p>댓글쓰기</p>
          <div className={styles.inputWrapper}>
            <input type='text' value={newComment} onChange={onChangeComment} />
            <button type='submit' disabled={inSubmit}>
              쓰기
            </button>
          </div>
        </form>
      </ul>
    </div>
  );
};

export default PannelComments;
