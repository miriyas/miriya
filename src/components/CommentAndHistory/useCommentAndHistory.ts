import { useQuery } from '@tanstack/react-query';

import { getHistoriesApi } from '@/services/histories';
import { SubTargetCategoryTypes, TargetCategoryTypes } from '@/types/comments.d';

interface Props {
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId: string;
}

const useCommentAndHistory = ({ targetCategory, targetSubCategory, targetId }: Props) => {
  const { data: histories = [], refetch: reloadHistories } = useQuery(
    ['getHistoriesApi'],
    () => {
      return getHistoriesApi({ targetCategory, targetSubCategory, targetId }).then((res) => res.data);
    },
    {
      suspense: true,
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  return {
    histories,
    reloadHistories,
  };
};

export default useCommentAndHistory;
