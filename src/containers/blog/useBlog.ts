import { useQuery } from '@tanstack/react-query';

import useAuth from '@/hooks/useAuth';
import { getBlogCategoriesAPI, getBlogCommentsAPI, getBlogPostsAPI } from '@/services/blog';

const useBlog = (categoryId?: string) => {
  const { isAdmin, isLoadingMe } = useAuth();

  const { data: posts = [], refetch: refetchPosts } = useQuery(
    ['getBlogPostsAPI', isAdmin, isLoadingMe, categoryId],
    () => getBlogPostsAPI(categoryId).then((res) => res.data),
    { enabled: !isLoadingMe },
  );

  const { data: categories = [] } = useQuery(['getBlogCategoriesAPI'], () =>
    getBlogCategoriesAPI().then((res) => res.data),
  );

  const { data: comments = [] } = useQuery(['getBlogCommentsAPI', 10], () =>
    getBlogCommentsAPI(10).then((res) => res.data),
  );

  return {
    posts,
    refetchPosts,
    categories,
    comments,
  };
};

export default useBlog;
