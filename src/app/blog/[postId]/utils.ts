import { unified } from 'unified';
import markdown from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remark2rehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import hrehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

import { getPostData } from '@/app/blog/utils';

export const getPost = async (postId: string) => {
  const postData = await getPostData(postId);
  const body = await (
    await unified()
      .use(markdown) // markdown
      .use(remarkGfm) // Github 문법
      .use(remark2rehype, { allowDangerousHtml: true }) // remark to rehype
      .use(rehypeRaw)
      .use(rehypeHighlight)
      .use(hrehypeStringify)
      .processSync(postData.body)
  ).toString();
  return {
    ...postData,
    body,
  };
};
