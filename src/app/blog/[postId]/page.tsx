import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';

import BlogShow from '@/containers/blog/Post/Show';

import { getMetaData } from '@/app/sharedMetadata';
import { getCategories, getPostData } from '@/app/blog/utils';

const getPost = async (postId: string) => {
  const postData = await getPostData(postId);
  const body = await (await remark().use(html, { sanitize: false }).process(postData.body)).toString();
  return {
    ...postData,
    body,
  };
};

interface Props {
  params: {
    postId: string;
  };
}

export async function generateMetadata({ params: { postId } }: Props): Promise<Metadata> {
  const postData = await getPost(postId);

  return {
    ...getMetaData({
      url: `https://miriya.vercel.app/blog/${postId}`,
      title: postData.title,
      description: '',
      imageUrl: postData.hero,
      keywords: [],
    }),
  };
}

const BlogShowPage = async ({ params: { postId } }: Props) => {
  let categories;
  let postData;
  try {
    categories = await getCategories();
    postData = await getPost(postId);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'Not Found') notFound();
    }
  }

  return <BlogShow categories={categories} postData={postData} />;
};

export default BlogShowPage;
