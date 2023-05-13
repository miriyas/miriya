import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import BlogShow from '@/containers/blog/Post/Show';
import { getPost } from './utils';

import { getMetaData } from '@/app/sharedMetadata';
import { getCategories } from '@/app/blog/utils';

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
      description: postData.preview,
      imageUrl: postData.hero ?? '',
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
