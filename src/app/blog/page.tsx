import BlogHome from '@/containers/blog';
import { fetchBlogCategoriesAPI, getBlogPostsAPI } from '@/services/blog';

const BlogHomePage = async () => {
  const postsData = getBlogPostsAPI().then((res) => res.data);
  const categoriesData = fetchBlogCategoriesAPI().then((res) => res.json());
  const [posts, categories] = await Promise.all([postsData, categoriesData]);

  return <BlogHome posts={posts} categories={categories} />;
};

export default BlogHomePage;
