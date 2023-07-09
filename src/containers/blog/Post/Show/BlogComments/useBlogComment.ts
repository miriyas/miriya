import { useQuery } from '@tanstack/react-query';

import { getCommentsApi, patchCommentAPI } from '@/services/comments';
import { Comment, TARGET_CATEGORY } from '@/types/comments.d';

interface Props {
  targetId: string;
}

const useBlogComment = ({ targetId }: Props) => {
  const {
    data: comments = [],
    refetch: reloadComments,
    isLoading: isLoadingComments,
  } = useQuery({
    queryKey: ['getCommentsApi', TARGET_CATEGORY.BLOG, targetId],
    queryFn: () => getCommentsApi({ targetCategory: TARGET_CATEGORY.BLOG, targetId }).then((res) => res.data),
  });

  const onEditSubmit = (comment: Comment, body: string) => {
    return patchCommentAPI({
      ...comment,
      body,
    }).then(() => {
      reloadComments();
    });
  };

  return {
    comments,
    reloadComments,
    isLoadingComments,
    onEditSubmit,
  };
};

export default useBlogComment;
