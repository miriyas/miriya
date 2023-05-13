import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';

import BlogShow from '@/containers/blog/Post/Show';

import { getCategories, getPostData } from '@/app/blog/utils';

interface Props {
  params: {
    postId: string;
  };
}

const BlogShowPage = async ({ params: { postId } }: Props) => {
  let categories;
  let postData;
  let body;
  try {
    categories = await getCategories();
    postData = await getPostData(postId);
    body = await (await remark().use(html, { sanitize: false }).process(postData.body)).toString();
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'Not Found') notFound();
    }
  }

  return (
    <BlogShow
      categories={categories}
      postData={{
        ...postData,
        body,
      }}
    />
  );
};

export default BlogShowPage;
