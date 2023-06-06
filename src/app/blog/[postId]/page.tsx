import { notFound } from 'next/navigation';

import BlogShow from '@/containers/blog/Post/Show';
import { getPost } from './utils';
import { getBlogCategoriesAPI } from '@/services/blog';

interface Props {
  params: {
    postId: string;
  };
}

const BlogShowPage = async ({ params: { postId } }: Props) => {
  const categoriesData = getBlogCategoriesAPI().then((res) => res.data);
  let postData;
  try {
    postData = getPost(postId);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'Not Found') notFound();
    }
  }
  const [post, categories] = await Promise.all([postData, categoriesData]);

  if (!post) notFound();
  return <BlogShow categories={categories} postData={post} />;
};

export default BlogShowPage;
