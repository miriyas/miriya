import { useEffect, useState } from 'react';

import { getGuestCommentsRealtime } from '@/services/guestbook';
import { Comment } from '@/types/comments.d';
import CommentItem from '@/containers/guestbook/RightWing/TabGuest/Comment';

import NewForm from './NewForm';

const TabGuest = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const unSubscribeComments = getGuestCommentsRealtime(setComments);
    return () => unSubscribeComments();
  }, []);

  return (
    <div>
      <NewForm />
      <ul>
        {comments.map((comment, i) => {
          return <CommentItem key={comment.id} comment={comment} no={comments.length - i} />;
        })}
      </ul>
    </div>
  );
};

export default TabGuest;
