'use client';

import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import useBlog from '../../useBlog';
import { postBlogPostAPI } from '@/services/blog';
import useAuth from '@/hooks/useAuth';

import Loading from '@/components/Loading';
import Form from './Form';

const NewContent = () => {
  const { isAdmin, isLoadingMe } = useAuth();
  const { categories } = useBlog();

  if (!isAdmin && !isLoadingMe) notFound();

  return (
    <Suspense fallback={<Loading />}>
      <Form categories={categories} onSubmit={postBlogPostAPI} />
    </Suspense>
  );
};

export default NewContent;
