import BlogCategory from '@/containers/blog';

interface Props {
  params: {
    categoryId: string;
  };
}

const BlogCategoryPage = async ({ params: { categoryId } }: Props) => {
  return <BlogCategory categoryId={categoryId} />;
};

export default BlogCategoryPage;
