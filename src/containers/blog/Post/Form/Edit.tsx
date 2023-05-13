'use client';

import { notFound } from 'next/navigation';

import useAuth from '@/hooks/useAuth';
import { patchBlogPostAPI } from '@/services/blog';
import { FBBlogCategory, FBBlogPost } from '@/types/blog.d';

import Editor from './Editor';

interface Props {
  categories: FBBlogCategory[];
  postData: FBBlogPost;
}

const BlogEditPage = ({ categories, postData }: Props) => {
  const { isAdmin } = useAuth();

  if (!isAdmin) notFound();

  return <Editor categories={categories} postData={postData} onSubmit={patchBlogPostAPI} />;
};

export default BlogEditPage;
