import BlogNew from '@/containers/blog/Post/NewAndEdit/New';
import { getBlogCategoriesAPI } from '@/services/blog';

export const revalidate = 3600;

const BlogNewPage = async () => {
  const categories = await getBlogCategoriesAPI().then((res) => res.data);
  return <BlogNew categories={categories} />;
};

export default BlogNewPage;
