import { useQuery } from '@tanstack/react-query';
import cx from 'clsx';

import { getComments } from '@/services/comments';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { getTimeDiffText } from '@/utils/date';

import styles from './index.module.scss';
import rightWingStyles from '../RightWing.module.scss';

const TabIdol = () => {
  const { data: comments = [] } = useQuery(
    ['getComments', TARGET_CATEGORY.IDOLS, 1000],
    () => getComments(TARGET_CATEGORY.IDOLS, 1000).then((res) => res),
    {
      suspense: true,
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  return (
    <div className={styles.tabIdol}>
      <p className={rightWingStyles.menu}>아이돌 페이지 댓글 목록</p>
      <div className={styles.commentsWrapper}>
        <p className={styles.desc}>
          일촌, 단짝친구 공개 폴더입니다 <span>[{comments[0].commentNoInCategory}]</span>
        </p>
        <ul>
          <li className={styles.header}>
            <p className={styles.no} />
            <p className={styles.idolName}>아이돌</p>
            <p className={styles.body}>내용</p>
            <p className={styles.name}>작성자</p>
            <p className={styles.createdAt}>작성일</p>
          </li>
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p className={styles.no}>{comment.commentNoInCategory}</p>
                <p className={styles.idolName}>{comment.targetId}</p>
                <p className={styles.body}>{comment.body}</p>
                <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
                  {comment.author.nickname}
                </p>
                <time className={styles.createdAt}>{getTimeDiffText(comment.createdAt?.seconds, true)}</time>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TabIdol;
