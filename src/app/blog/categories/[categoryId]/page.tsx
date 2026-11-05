import BlogCategory from '@/containers/blog';
import { getBlogCategoriesAPI, getBlogPostsAPI } from '@/services/blog';

export async function generateStaticParams() {
  const categories = await getBlogCategoriesAPI().then((res) => res.data);
  return categories.map((category) => ({ categoryId: category.id }));
}

export const revalidate = 3600;

interface Props {
  params: Promise<{
    categoryId: string;
  }>;
}

const BlogCategoryPage = async ({ params }: Props) => {
  const { categoryId } = await params;
  const postsData = getBlogPostsAPI(categoryId).then((res) => res.data);
  const categoriesData = getBlogCategoriesAPI().then((res) => res.data);
  const [posts, categories] = await Promise.all([postsData, categoriesData]);

  return <BlogCategory posts={posts} categories={categories} />;
};

export default BlogCategoryPage;
