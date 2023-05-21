import { renderMarkdown } from '@/utils/blog';

import { getPostData } from '@/app/blog/utils';

export const getPost = async (postId: string) => {
  const postData = await getPostData(postId);
  const body = await renderMarkdown(postData.body);
  return {
    ...postData,
    body,
  };
};
