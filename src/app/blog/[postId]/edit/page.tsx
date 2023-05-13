import BlogEdit from '@/containers/blog/Post/NewAndEdit/Edit';

import { getCategories, getPostData } from '@/app/blog/utils';

interface Props {
  params: {
    postId: string;
  };
}

const BlogEditPage = async ({ params: { postId } }: Props) => {
  const categories = await getCategories();
  const postData = await getPostData(postId);

  return <BlogEdit categories={categories} postData={postData} />;
};

export default BlogEditPage;
