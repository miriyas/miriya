import { remark } from 'remark';
import html from 'remark-html';

import { getPostData } from '@/app/blog/utils';

export const getPost = async (postId: string) => {
  const postData = await getPostData(postId);
  const body = await (await remark().use(html, { sanitize: false }).process(postData.body)).toString();
  return {
    ...postData,
    body,
  };
};
