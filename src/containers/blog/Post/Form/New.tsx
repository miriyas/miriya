'use client';

import useBlog from '../../useBlog';
import { postBlogPostAPI } from '@/services/blog';

import LoadingPage from '@/components/Loading/LoadingPage';
import Editor from './Editor';

const BlogNewPage = () => {
  const { categories, isLoadingCategories } = useBlog();

  if (isLoadingCategories) {
    return <LoadingPage />;
  }

  return <Editor categories={categories} onSubmit={postBlogPostAPI} />;
};

export default BlogNewPage;
