'use client';

import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

import useBlog from '../../useBlog';
import { postBlogPostAPI } from '@/services/blog';
import useAuth from '@/hooks/useAuth';

import LoadingPage from '@/components/Loading/LoadingPage';

const Form = dynamic(() => import('./Form'), {
  ssr: false,
  loading: () => <LoadingPage />,
});

const NewContent = () => {
  const { isAdmin, isLoadingMe } = useAuth();
  const { categories } = useBlog();

  if (!isAdmin && !isLoadingMe) notFound();

  return (
    <Suspense fallback={<LoadingPage />}>
      <Form categories={categories} onSubmit={postBlogPostAPI} />
    </Suspense>
  );
};

export default NewContent;
