import { useQuery } from '@tanstack/react-query';

import { getBlogPostAPI } from '@/services/blog';

const useBlogEdit = (postId: string) => {
  const { data: postData, isLoading } = useQuery(
    ['getBlogPostAPI', postId],
    () => getBlogPostAPI(postId).then((res) => res.data),
    {
      suspense: true,
    },
  );

  return {
    postData,
    isLoading,
  };
};

export default useBlogEdit;
