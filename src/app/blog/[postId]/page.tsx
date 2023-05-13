import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import BlogShow from '@/containers/blog/Post/Show';
import { getPost } from './utils';

import { getCategories } from '@/app/blog/utils';

interface Props {
  params: {
    postId: string;
  };
}

export async function generateMetadata({ params: { postId } }: Props): Promise<Metadata> {
  const postData = await getPost(postId);

  const url = `https://miriya.vercel.app/blog/${postId}`;
  const { title } = postData;
  const description = postData.preview;

  return {
    title,
    description,
    openGraph: {
      description,
      type: 'website',
      title,
      url,
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title,
    //   description,
    //   images: [imageUrl],
    // },
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
