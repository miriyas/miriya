import BlogEdit from '@/containers/blog/Post/NewAndEdit/Edit';
import { getBlogCategoriesAPI, getBlogPostAPI } from '@/services/blog';

interface Props {
  params: Promise<{
    postId: string;
  }>;
}

const BlogEditPage = async ({ params }: Props) => {
  const { postId } = await params;
  if (!postId) return null;
  const postData = getBlogPostAPI(postId).then((res) => res.data);
  const categoriesData = getBlogCategoriesAPI().then((res) => res.data);
  const [post, categories] = await Promise.all([postData, categoriesData]);
  return <BlogEdit postData={post} categories={categories} />;
};

export default BlogEditPage;
