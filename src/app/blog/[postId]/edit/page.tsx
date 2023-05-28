'use client';

import BlogEdit from '@/containers/blog/Post/NewAndEdit/Edit';
import { getBlogCategoriesAPI, getBlogPostAPI, getBlogPostsAPI } from '@/services/blog';

export async function generateStaticParams() {
  const posts = await getBlogPostsAPI().then((res) => res.data);

  return posts.map((post) => ({
    postId: post.id,
  }));
}

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
