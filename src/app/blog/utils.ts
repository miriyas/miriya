import { fetchClient } from '@/services/apiClient';

export const getCategories = () => {
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

export const getPostData = (postId: string) => {
  return fetchClient(`/blog/posts/${postId}`).then((res) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  });
};
