import { Comment } from '@/types/comments.d';

import NewForm from './NewForm';
import CommentItem from './Comment';

interface Props {
  comments: Comment[];
}

const TabGuestBook = ({ comments }: Props) => {
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
