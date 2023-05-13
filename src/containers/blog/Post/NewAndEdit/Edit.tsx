'use client';

import { notFound } from 'next/navigation';

import useAuth from '@/hooks/useAuth';
import { patchBlogPostAPI } from '@/services/blog';
import { FBBlogCategory, FBBlogPost } from '@/types/blog.d';

import Form from './Form';

interface Props {
  categories: FBBlogCategory[];
  postData: FBBlogPost;
}

const BlogEditPage = ({ categories, postData }: Props) => {
  const { isAdmin } = useAuth();

  if (!isAdmin) notFound();

  return <Form categories={categories} postData={postData} onSubmit={patchBlogPostAPI} />;
};

export default BlogEditPage;
