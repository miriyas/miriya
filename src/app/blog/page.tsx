import BlogHome from '@/containers/blog';
import { getBlogCategoriesAPI, getBlogPostsAPI } from '@/services/blog';

const BlogHomePage = async () => {
  const postsData = getBlogPostsAPI().then((res) => res.data);
  const categoriesData = getBlogCategoriesAPI().then((res) => res.data);
  const [posts, categories] = await Promise.all([postsData, categoriesData]);

  return <BlogHome posts={posts} categories={categories} />;
};

export default BlogHomePage;
