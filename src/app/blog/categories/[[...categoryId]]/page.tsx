import BlogCategory from '@/containers/blog';
import { getBlogCategoriesAPI } from '@/services/blog';

export async function generateStaticParams() {
  const categories = await getBlogCategoriesAPI().then((res) => res.data);
  return categories.map((category) => category.id);
}

export const revalidate = 3600;

interface Props {
  params: {
    categoryId?: string;
  };
}

const BlogCategoryPage = async ({ params: { categoryId } }: Props) => {
  return <BlogCategory categoryId={categoryId ? categoryId[0] : undefined} />;
};

export default BlogCategoryPage;
