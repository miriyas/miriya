'use client';

import { useQuery } from '@tanstack/react-query';
import cx from 'clsx';

import { getMinihomeCommentDataAPI } from '@/services/minihome';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { getTimeDiffText } from '@/utils/date';

import styles from '../common.module.scss';

const Comments = () => {
  const { data: comments = [] } = useQuery(
    ['getMinihomeCommentDataAPI', TARGET_CATEGORY.PENTAX, 1000],
    () => getMinihomeCommentDataAPI(TARGET_CATEGORY.PENTAX, 1000).then((res) => res.data),
    {
      suspense: true,
    },
  );

  return (
    <>
      <p className={styles.desc}>
        일촌, 단짝친구 공개 폴더입니다 <span>[{comments[0]?.commentNoInCategory}]</span>
      </p>
      <ul>
        <li className={styles.header}>
          <p className={styles.no} />
          <p className={styles.targetName}>기종</p>
          <p className={styles.body}>내용</p>
          <p className={styles.name}>작성자</p>
          <p className={styles.createdAt}>작성일</p>
        </li>
        {comments.map((comment) => {
          return (
            <li key={comment.id} title={comment.id}>
              <p className={styles.no}>{comment.commentNoInCategory}</p>
              <p className={styles.targetName}>{comment.targetName}</p>
              <p className={styles.body}>{comment.body}</p>
              <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
                {comment.author.nickname}
              </p>
              <time className={styles.createdAt}>{getTimeDiffText(comment.createdAt?.seconds, true)}</time>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
