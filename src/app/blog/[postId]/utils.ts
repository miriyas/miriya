import { notFound } from 'next/navigation';

import { renderMarkdown } from '@/utils/blog';
import { FBBlogPost } from '@/types/blog.d';
import { fetchClient } from '@/services';

export const getPost = async (postId: string): Promise<FBBlogPost> => {
  // Axios 쓰면 안된다! og:image용 서비스워커는 fetch만 가능함 ㅠㅠ
  // https://stackoverflow.com/questions/75280544/uncaught-in-promise-error-error-adapter-http-is-not-available-in-the-build
  const postData = await fetchClient(`/blog/posts/${postId}`, { revalidate: 0 }).then((res) => {
    // https://github.com/vercel/next.js/issues/49387
    // Next ISG 이슈가 해결되기 전까지 revaildate 0 넣어서 사용한다 ㅠㅠ
    if (!res.ok) {
      if (res.statusText === 'Not Found') notFound();
    }
    return res.json();
  });

  const body = await renderMarkdown(postData.body);
  return {
    ...postData,
    body,
  };
};
