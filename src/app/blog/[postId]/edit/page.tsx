'use client';

import BlogEdit from '@/containers/blog/Post/NewAndEdit/Edit';

import { getCategories, getPostData } from '@/app/blog/utils';

interface Props {
  params: {
    postId: string;
  };
}

const BlogEditPage = async (props: Props) => {
  if (!props) return null;
  const categories = await getCategories();
  const postData = await getPostData(props.params.postId);

  return <BlogEdit categories={categories} postData={postData} />;
};

export default BlogEditPage;
