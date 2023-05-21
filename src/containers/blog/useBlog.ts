import { useQuery } from '@tanstack/react-query';

import { getBlogCategoriesAPI, getBlogPostsAPI } from '@/services/blog';

const useBlog = () => {
  const { data: posts = [], refetch: refetchPosts } = useQuery(
    ['getBlogPostsAPI'],
    () => getBlogPostsAPI().then((res) => res.data),
    {
      suspense: true,
    },
  );

  const { data: categories = [], refetch: refetchCategories } = useQuery(
    ['getBlogCategoriesAPI'],
    () => getBlogCategoriesAPI().then((res) => res.data),
    {
      suspense: true,
    },
  );

  return {
    posts,
    refetchPosts,
    categories,
    refetchCategories,
  };
};

export default useBlog;
