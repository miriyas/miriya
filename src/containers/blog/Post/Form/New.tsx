'use client';

import { notFound } from 'next/navigation';

import useBlog from '../../useBlog';
import { postBlogPostAPI } from '@/services/blog';
import useAuth from '@/hooks/useAuth';

import LoadingPage from '@/components/Loading/LoadingPage';
import Editor from './Editor';

const BlogNewPage = () => {
  const { isAdmin } = useAuth();
  const { categories, isLoadingCategories } = useBlog();

  if (!isAdmin) notFound();

  if (isLoadingCategories) {
    return <LoadingPage />;
  }

  return <Editor categories={categories} onSubmit={postBlogPostAPI} />;
};

export default BlogNewPage;
