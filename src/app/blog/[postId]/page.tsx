import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import BlogShow from '@/containers/blog/Post/Show';
import { getPost } from './utils';
import { getBlogCategoriesAPI, getBlogPostsAPI } from '@/services/blog';

interface Props {
  params: {
    postId: string;
  };
}

export async function generateMetadata({ params: { postId } }: Props): Promise<Metadata> {
  const postData = await getPost(postId);

  const url = `https://miriya.net/blog/${postId}`;
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
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPostsAPI().then((res) => res.data);

  return posts.map((post) => ({
    postId: post.id,
  }));
}

const BlogShowPage = async ({ params: { postId } }: Props) => {
  const categories = await getBlogCategoriesAPI().then((res) => res.data);
  let postData;
  try {
    postData = await getPost(postId);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'Not Found') notFound();
    }
  }

  if (!postData) notFound();
  return <BlogShow categories={categories} postData={postData} />;
};

export default BlogShowPage;
