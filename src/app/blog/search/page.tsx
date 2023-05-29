import BlogSearch from '@/containers/blog/Search';
import { getBlogCategoriesAPI } from '@/services/blog';

export const dynamic = 'force-dynamic';

const BlogSearchPage = async () => {
  const categories = await getBlogCategoriesAPI().then((res) => res.data);
  return <BlogSearch categories={categories} />;
};

export default BlogSearchPage;
