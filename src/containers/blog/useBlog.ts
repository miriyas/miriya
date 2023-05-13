import { useQuery } from '@tanstack/react-query';

import { getBlogCategoriesAPI, getBlogPostsAPI } from '@/services/blog';

const useBlog = () => {
  const {
    data: posts = [],
    isLoading: isLoadingPosts,
    refetch: refetchPosts,
  } = useQuery(['getBlogPostsAPI'], () => getBlogPostsAPI().then((res) => res.data));

  const {
    data: categories = [],
    isLoading: isLoadingCategories,
    refetch: refetchCategories,
  } = useQuery(['getBlogCategoriesAPI'], () => getBlogCategoriesAPI().then((res) => res.data));

  return {
    posts,
    isLoadingPosts,
    refetchPosts,
    categories,
    isLoadingCategories,
    refetchCategories,
  };
};

export default useBlog;
