import Image from 'next/image';

import { M2PostType } from '@/types/m2day.d';
import { getTimeDiffText } from '@/utils/date';

import styles from './Post.module.scss';

interface Props {
  post: M2PostType;
}

const M2Post = ({ post }: Props) => {
  const { createdAt, content, tags, likes, comments } = post;

  const onClickMeToo = () => {
    // console.log('me2');
  };

  const onClickComment = () => {
    // console.log('me2');
  };

  return (
    <li className={styles.post}>
      <div className={styles.leftWing}>
        <div className={styles.imageBox} />
      </div>
      <div className={styles.rightWing}>
        <div className={styles.content}>
          {content}
          <time>{getTimeDiffText(createdAt)}</time>
        </div>
        <div className={styles.tags}>{tags}</div>
        <div className={styles.functions}>
          <button type='button' onClick={onClickMeToo} className={styles.me2}>
            <Image className={styles.logo} src='/images/m2day/me2.png' width={50} height={58} alt='' />
            미투
          </button>
          <button type='button' onClick={onClickMeToo} className={styles.me2Count}>
            {likes}
          </button>
          <button type='button' onClick={onClickComment} className={styles.comment}>
            {comments.length > 0 ? '댓글' : '댓글달기'}
            {comments.length > 0 && <span>{comments.length}</span>}
          </button>
        </div>
      </div>
    </li>
  );
};

export default M2Post;
