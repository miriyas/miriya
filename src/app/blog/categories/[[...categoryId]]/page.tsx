import BlogCategory from '@/containers/blog';

interface Props {
  params: {
    categoryId: string;
  };
}

const BlogCategoryPage = async ({ params: { categoryId } }: Props) => {
  return <BlogCategory categoryId={categoryId ? categoryId[0] : undefined} />;
};

export default BlogCategoryPage;
