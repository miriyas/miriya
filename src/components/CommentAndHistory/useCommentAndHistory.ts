import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { getCommentsApi, patchCommentAPI } from '@/services/comments';
import { getHistoriesApi } from '@/services/histories';
import { Comment, TargetCategoryTypes } from '@/types/comments.d';

interface Props {
  targetCategory: TargetCategoryTypes;
  targetId: string;
}

const useCommentAndHistory = ({ targetCategory, targetId }: Props) => {
  const router = useRouter();

  const {
    data: histories = [],
    refetch: reloadHistories,
    isLoading: isLoadingHistories,
  } = useQuery(['getHistoriesApi', targetCategory, targetId], () => {
    return getHistoriesApi({ targetCategory, targetId }).then((res) => res.data);
  });

  const {
    data: comments = [],
    refetch: reloadComments,
    isLoading: isLoadingComments,
  } = useQuery(['getCommentsApi', targetCategory, targetId], () => {
    return getCommentsApi({ targetCategory, targetId }).then((res) => res.data);
  });

  const onEditSubmit = (comment: Comment, body: string) => {
    return patchCommentAPI({
      ...comment,
      body,
    }).then(() => {
      router.refresh();
      reloadComments();
    });
  };

  return {
    histories,
    reloadHistories,
    isLoadingHistories,
    comments,
    reloadComments,
    isLoadingComments,
    onEditSubmit,
  };
};

export default useCommentAndHistory;
