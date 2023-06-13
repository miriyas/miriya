import { MouseEventHandler, useState } from 'react';

import { Comment, TARGET_CATEGORY } from '@/types/comments.d';
import { deleteCommentAPI } from '@/services/comments';
import useCameras from '@/containers/cameras/useCameras';

import useCommentAndHistory from '@/components/CommentAndHistory/useCommentAndHistory';
import ItemCommentVertical from './IndexVertical';
import ItemCommentHorizontal from './IndexHorizontal';
import defaultStyles from './index.module.scss';

interface Props {
  comment: Comment;
  direction?: 'horizontal' | 'vertical';
  overrideStyles?: {
    readonly [key: string]: string;
  };
}

const ItemComment = ({ comment, direction = 'vertical', overrideStyles }: Props) => {
  const styles = overrideStyles ?? defaultStyles;

  const { reloadComments } = useCommentAndHistory({
    targetCategory: comment.targetCategory,
    targetId: comment.targetId ?? 'undefined',
  });
  const { reload } = useCameras();
  const [editMode, setEditMode] = useState(false);

  const onClickEdit: MouseEventHandler<HTMLButtonElement> = () => {
    setEditMode(true);
  };

  const onClickDelete: MouseEventHandler<HTMLButtonElement> = () => {
    deleteCommentAPI(comment.id).then(() => {
      reloadComments();
      if (comment.targetCategory === TARGET_CATEGORY.CAMERA) reload();
    });
  };

  const deleted = comment.deletedAt !== null;

  if (deleted) return null;

  if (direction === 'vertical') {
    return (
      <ItemCommentVertical
        styles={styles}
        comment={comment}
        editMode={editMode}
        setEditMode={setEditMode}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
    );
  }

  return (
    <ItemCommentHorizontal
      styles={styles}
      comment={comment}
      editMode={editMode}
      setEditMode={setEditMode}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
    />
  );
};

export default ItemComment;
