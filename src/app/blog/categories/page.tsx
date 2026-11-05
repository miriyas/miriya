import { fetchBlogCategoriesAPI } from '@/services/blog';
import { BlogCategory } from '@/types/blog';

import BlogCategoryManage from './BlogCategoryManageLazy';

export async function generateStaticParams() {
  const categories: BlogCategory[] = await fetchBlogCategoriesAPI().then((res) => res.json());
  return categories.map((category) => category.id);
}

export const revalidate = 3600;

const BlogCategoryManagePage = async () => {
  const categories = await fetchBlogCategoriesAPI().then((res) => res.json());
  return <BlogCategoryManage categories={categories} />;
};

export default BlogCategoryManagePage;
