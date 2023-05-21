'use client';

import BlogEdit from '@/containers/blog/Post/NewAndEdit/Edit';

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
