import cx from 'clsx';
import Link from 'next/link';

import { Comment } from '@/types/comments.d';
import { cameraId } from '@/utils/cameras';
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
        일촌, 단짝친구 공개 폴더입니다 <span>[{comments[0]?.commentNo}]</span>
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
              <Link href={`/cameras#${cameraId(comment.camera!.maker, comment.camera!.name)}`}>
                <p className={styles.no}>{comment.commentNo}</p>
                <p className={styles.targetName}>{comment.camera?.name}</p>
                <p className={styles.body}>{comment.body}</p>
                <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
                  {filterAuthorName(comment.authorId, comment.author.nickname)}
                </p>
                <time className={styles.createdAt}>{getTimeDiffText(comment.createdAt, true)}</time>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
