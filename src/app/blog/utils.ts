import { fetchClient } from '@/services/apiClient';
import { FBBlogPost } from '@/types/blog';

export const getCategories = async () => {
  return fetchClient('/blog/categories')
    .then((res) => {
      if (!res.ok) {
        return Promise.reject();
      }
      return res.json();
    })
    .catch(() => {
      return [];
    });
};

export const getPostData = async (postId: string) => {
  return fetchClient(`/blog/posts/${postId}`).then((res) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  });
};

export const getPostsData = async (): Promise<FBBlogPost[]> => {
  return fetchClient('/blog/posts').then((res) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  });
};
