import cx from 'clsx';
import Link from 'next/link';

import { Comment } from '@/types/comments.d';
import { getTimeDiffText } from '@/utils/date';
import { filterAuthorName } from '@/utils/auth';

import styles from '../common.module.scss';

interface Props {
  comments: Comment[];
}

const Comments = ({ comments }: Props) => {
  return (
    <>
      <p className={styles.desc}>
        일촌, 단짝친구 공개 폴더입니다 <span>[{comments[0]?.commentNoInCategory}]</span>
      </p>
      <ul>
        <li className={styles.header}>
          <p className={styles.no} />
          <p className={styles.targetName}>제목</p>
          <p className={styles.body}>내용</p>
          <p className={styles.name}>작성자</p>
          <p className={styles.createdAt}>작성일</p>
        </li>
        {comments.map((comment) => {
          return (
            <li key={comment.id} title={comment.id}>
              <Link href={`/blog/${comment.targetId}`}>
                <p className={styles.no}>{comment.commentNoInCategory}</p>
                <p className={styles.targetName}>{comment.targetName}</p>
                <p className={styles.body}>{comment.body}</p>
                <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
                  {filterAuthorName(comment.authorId, comment.author.nickname)}
                </p>
                <time className={styles.createdAt}>{getTimeDiffText(comment.createdAt?.seconds, true)}</time>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
