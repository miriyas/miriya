import dynamic from 'next/dynamic';

import { fetchBlogCategoriesAPI } from '@/services/blog';
import { FBBlogCategory } from '@/types/blog.d';

export async function generateStaticParams() {
  const categories: FBBlogCategory[] = await fetchBlogCategoriesAPI().then((res) => res.json());
  return categories.map((category) => category.id);
}

export const revalidate = 3600;

const BlogCategoryManage = dynamic(() => import('@/containers/blog/Categories'), { ssr: false });

const BlogCategoryManagePage = async () => {
  const categories = await fetchBlogCategoriesAPI().then((res) => res.json());
  return <BlogCategoryManage categories={categories} />;
};

export default BlogCategoryManagePage;
