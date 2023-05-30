import { useQuery } from '@tanstack/react-query';

import useAuth from '@/hooks/useAuth';
import { getBlogCommentsAPI, getBlogPostsAPI } from '@/services/blog';

const useBlog = (categoryId?: string) => {
  const { isAdmin } = useAuth();

  const { data: posts = [], refetch: refetchPosts } = useQuery(
    ['getBlogPostsAPI', isAdmin, categoryId],
    () => getBlogPostsAPI(categoryId).then((res) => res.data),
    {
      suspense: true,
    },
  );

  const { data: comments = [] } = useQuery(
    ['getBlogCommentsAPI', 10],
    () => getBlogCommentsAPI(10).then((res) => res.data),
    {
      suspense: true,
    },
  );

  return {
    posts,
    refetchPosts,
    comments,
  };
};

export default useBlog;
