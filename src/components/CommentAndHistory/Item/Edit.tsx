import { ChangeEventHandler, Dispatch, FormEventHandler, MouseEventHandler, SetStateAction, useState } from 'react';

import { Comment } from '@/types/comments.d';
import useAuth from '@/hooks/useAuth';
import useCommentAndHistory from '../useCommentAndHistory';

import CommentEditVertical from './EditVertical';
import CommentEditHorizontal from './EditHorizontal';

interface Props {
  comment: Comment;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  direction?: 'horizontal' | 'vertical';
  styles: {
    readonly [key: string]: string;
  };
}

const CommentEditForm = ({ comment, setEditMode, direction, styles }: Props) => {
  const { onEditSubmit } = useCommentAndHistory({
    targetCategory: comment.targetCategory,
    targetSubCategory: comment.targetSubCategory,
    targetId: comment.targetId ?? '',
  });
  const { user } = useAuth();
  const [body, setBody] = useState(comment.body);

  const onClickCancel: MouseEventHandler<HTMLButtonElement> = () => {
    setEditMode(false);
    setBody(comment.body);
  };

  const onChangeBody: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setBody(e.currentTarget.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) return;
    setEditMode(false);
    onEditSubmit(comment, body).then(() => {
      setBody(body);
    });
  };

  if (direction === 'vertical') {
    return (
      <CommentEditVertical
        comment={comment}
        body={body}
        onSubmit={onSubmit}
        onChangeBody={onChangeBody}
        onClickCancel={onClickCancel}
        styles={styles}
      />
    );
  }

  return (
    <CommentEditHorizontal
      comment={comment}
      body={body}
      onSubmit={onSubmit}
      onChangeBody={onChangeBody}
      onClickCancel={onClickCancel}
      styles={styles}
    />
  );
};

export default CommentEditForm;
