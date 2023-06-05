'use client';

import BlogEdit from '@/containers/blog/Post/NewAndEdit/Edit';
import { getBlogCategoriesAPI, getBlogPostAPI } from '@/services/blog';

interface Props {
  params: {
    postId: string;
  };
}

const BlogEditPage = async ({ params: { postId } }: Props) => {
  if (!postId) return null;
  const postData = getBlogPostAPI(postId).then((res) => res.data);
  const categoriesData = getBlogCategoriesAPI().then((res) => res.data);
  const [post, categories] = await Promise.all([postData, categoriesData]);
  return <BlogEdit postData={post} categories={categories} />;
};

export default BlogEditPage;
