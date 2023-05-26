'use client';

import BlogEdit from '@/containers/blog/Post/NewAndEdit/Edit';
import { getBlogPostsAPI } from '@/services/blog';

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

const BlogEditPage = async (props: Props) => {
  if (!props) return null;
  return <BlogEdit postId={props.params.postId} />;
};

export default BlogEditPage;
