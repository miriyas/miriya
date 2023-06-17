import { useQuery } from '@tanstack/react-query';
import { MouseEventHandler } from 'react';

import { deleteM2dayAPI, getM2daysApi } from '@/services/m2day';
import useAlert from '@/hooks/useAlert';

const useM2day = () => {
  const { addAlert } = useAlert();

  const {
    data: posts = [],
    isLoading,
    refetch: refetchPosts,
  } = useQuery(['getM2daysApi'], () => getM2daysApi().then((res) => res.data));

  const onClickDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { targetid } = e.currentTarget.dataset;
    if (!targetid) return;

    addAlert({
      message: '진짜 삭제하시겠습니까?',
      cancelLabel: '낙장불입',
      onConfirm: () => {
        deleteM2dayAPI(targetid).then(() => {
          refetchPosts();
        });
      },
    });
  };

  return {
    posts,
    isLoading,
    refetchPosts,
    onClickDelete,
  };
};

export default useM2day;