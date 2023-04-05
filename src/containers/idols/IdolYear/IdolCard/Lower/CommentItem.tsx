import { Comment } from '@/types/comments.d';
import { getTimeDiffText } from '@/utils/date';

import styles from './CommentItem.module.scss';
import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';

interface Props {
  comment: Comment;
}

const CommentItem = ({ comment }: Props) => {
  return (
    <li className={styles.commentItem}>
      <div className={styles.upper}>
        <p>{comment.body}</p>
      </div>
      <div className={styles.lower}>
        <div className={styles.profile}>
          <ProfileImageWithFallback src={comment.author.profileUrl} uid={comment.authorId} alt='' size={24} />
        </div>
        <time>{getTimeDiffText(comment.createdAt?.seconds, true)}</time>
      </div>
    </li>
  );
};

export default CommentItem;
