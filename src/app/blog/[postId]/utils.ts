import { renderMarkdown } from '@/utils/blog';
import { FBBlogPost } from '@/types/blog.d';
import { fetchClient } from '@/services/apiClient';

export const getPost = async (postId: string): Promise<FBBlogPost> => {
  // Axios 쓰면 안된다! og:image용 서비스워커는 fetch만 가능함 ㅠㅠ
  // https://stackoverflow.com/questions/75280544/uncaught-in-promise-error-error-adapter-http-is-not-available-in-the-build
  const postData = await fetchClient(`/blog/posts/${postId}`).then((res) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  });

  const body = await renderMarkdown(postData.body);
  return {
    ...postData,
    body,
  };
};
