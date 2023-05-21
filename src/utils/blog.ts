import { unified } from 'unified';
import markdown from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remark2rehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

export const renderMarkdown = async (mdText: string) => {
  const body = await (
    await unified()
      .use(markdown) // markdown
      .use(remarkGfm) // Github 문법
      .use(remark2rehype, { allowDangerousHtml: true }) // remark to rehype
      .use(rehypeRaw)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .processSync(mdText)
  ).toString();
  return body;
};
