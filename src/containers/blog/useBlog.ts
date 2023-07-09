import { useQuery } from '@tanstack/react-query';

import useAuth from '@/hooks/useAuth';
import { getBlogCategoriesAPI, getBlogCommentsAPI, getBlogPostsAPI } from '@/services/blog';

const useBlog = (categoryId?: string) => {
  const { isAdmin, isLoadingMe } = useAuth();

  const { data: posts = [], refetch: refetchPosts } = useQuery({
    queryKey: ['getBlogPostsAPI', isAdmin, isLoadingMe, categoryId],
    queryFn: () => getBlogPostsAPI(categoryId).then((res) => res.data),
    enabled: !isLoadingMe,
  });

  const { data: categories = [] } = useQuery({
    queryKey: ['getBlogCategoriesAPI'],
    queryFn: () => getBlogCategoriesAPI().then((res) => res.data),
  });

  const { data: comments = [] } = useQuery({
    queryKey: ['getBlogCommentsAPI'],
    queryFn: () => getBlogCommentsAPI().then((res) => res.data),
  });

  return {
    posts,
    refetchPosts,
    categories,
    comments,
  };
};

export default useBlog;
