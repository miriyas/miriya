import { cookies } from 'next/headers';

import BlogHome from '@/containers/blog';
import { getBlogCategoriesAPI, fetchBlogPostsAPI } from '@/services/blog';
import { cookiesToString } from '@/utils/cookie';

const BlogHomePage = async () => {
  const cookieStore = cookies();
  const cookiesString = cookiesToString(cookieStore.getAll());

  const postsData = fetchBlogPostsAPI(cookiesString).then((res) => res.data);
  const categoriesData = getBlogCategoriesAPI().then((res) => res.data);
  const [posts, categories] = await Promise.all([postsData, categoriesData]);

  return <BlogHome posts={posts} categories={categories} />;
};

export default BlogHomePage;
