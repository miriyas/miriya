'use client';

import { useEffect, useState } from 'react';

import { getGuestCommentsRealtime } from '@/services/firebase/guestbook';
import { Comment } from '@/types/comments.d';
import CommentItem from '@/containers/minihome/TabGuestBook/Comment';

import NewForm from './NewForm';

const TabGuestBook = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const unSubscribeComments = getGuestCommentsRealtime(setComments);
    return () => unSubscribeComments();
  }, []);

  return (
    <div>
      <NewForm />
      <ul>
        {comments.map((comment) => {
          return <CommentItem key={comment.id} comment={comment} />;
        })}
      </ul>
    </div>
  );
};

export default TabGuestBook;
