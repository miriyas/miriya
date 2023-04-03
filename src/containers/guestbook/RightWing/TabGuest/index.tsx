import { useEffect, useState } from 'react';
import cx from 'clsx';

import { getCommentsRealtime } from '@/services/guestbook';
import { Comment } from '@/types/comments.d';
import { getTimeDiffText } from '@/utils/date';

import Form from './Form';
import styles from './index.module.scss';
import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';

const TabGuest = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const unSubscribeComments = getCommentsRealtime(setComments);
    return () => unSubscribeComments();
  }, []);

  return (
    <div className={styles.tabGuest}>
      <Form />
      <ul className={styles.itemList}>
        {comments.map((comment, i) => {
          return (
            <li key={comment.id}>
              <div className={styles.upper}>
                <div className={styles.leftWing}>
                  <p className={styles.number}>No.{comments.length - i}</p>
                  <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
                    {comment.author.nickname}
                  </p>
                  <time>({getTimeDiffText(comment.createdAt?.seconds, true)})</time>
                </div>
                <div className={styles.rightWing}>
                  <button type='button'>비밀로하기</button>|<button type='button'>삭제</button>
                </div>
              </div>
              <div className={styles.lower}>
                <div className={styles.leftWing}>
                  <ProfileImageWithFallback src={comment.author.profileUrl} uid={comment.authorId} alt='' size={96} />
                </div>
                <div className={styles.rightWing}>{comment.body}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabGuest;
