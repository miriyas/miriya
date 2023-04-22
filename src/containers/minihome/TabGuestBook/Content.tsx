'use client';

import useGuestbook from './useGuestbook';
import CommentItem from '@/containers/minihome/TabGuestBook/Comment';

import NewForm from './NewForm';

const TabGuestBookContent = () => {
  const { comments } = useGuestbook();

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

export default TabGuestBookContent;
