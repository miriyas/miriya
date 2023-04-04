import { useEffect, useState } from 'react';

import { getCommentsRealtime } from '@/services/guestbook';
import { Comment } from '@/types/comments.d';
import CommentItem from '@/containers/guestbook/RightWing/TabGuest/Comment';

import Form from './Form';
import styles from './index.module.scss';

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
          return <CommentItem key={comment.id} comment={comment} no={comments.length - i} />;
        })}
      </ul>
    </div>
  );
};

export default TabGuest;
