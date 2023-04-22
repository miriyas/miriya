import { useQuery } from '@tanstack/react-query';

import { getCommentsApi, patchCommentAPI } from '@/services/comments';
import { getHistoriesApi } from '@/services/histories';
import { Comment, SubTargetCategoryTypes, TargetCategoryTypes } from '@/types/comments.d';

interface Props {
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId: string;
}

const useCommentAndHistory = ({ targetCategory, targetSubCategory, targetId }: Props) => {
  const {
    data: histories = [],
    refetch: reloadHistories,
    isLoading: isLoadingHistories,
  } = useQuery(
    ['getHistoriesApi', targetCategory, targetSubCategory, targetId],
    () => {
      return getHistoriesApi({ targetCategory, targetSubCategory, targetId }).then((res) => res.data);
    },
    {
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  const {
    data: comments = [],
    refetch: reloadComments,
    isLoading: isLoadingComments,
  } = useQuery(
    ['getCommentsApi', targetCategory, targetSubCategory, targetId],
    () => {
      return getCommentsApi({ targetCategory, targetSubCategory, targetId }).then((res) => res.data);
    },
    {
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  const onEditSubmit = (comment: Comment, body: string) => {
    return patchCommentAPI({
      ...comment,
      body,
    }).then(() => {
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
