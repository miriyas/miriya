import { unified } from 'unified';
import markdown from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remark2rehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

const processYoutube = (raw: string) => {
  let processed = raw;
  const regex = /(?:{{youtube\|(.+?)}})/g;
  const matchedArray = [...processed.matchAll(regex)];
  matchedArray.forEach((arr) => {
    const original = arr[0];
    const id = arr[1];
    processed = processed.replace(
      original,
      `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen=""></iframe>`,
    );
  });

  return processed;
};

export const renderMarkdown = async (mdText: string) => {
  const body = await (
    await unified()
      .use(markdown) // markdown
      .use(remarkGfm) // Github 문법
      .use(remark2rehype, { allowDangerousHtml: true }) // remark to rehype
      .use(rehypeRaw)
      .use(rehypeHighlight, { ignoreMissing: true })
      .use(rehypeStringify)
      .process(mdText)
      .then((txt) => processYoutube(String(txt)))
  ).toString();
  return body;
};
