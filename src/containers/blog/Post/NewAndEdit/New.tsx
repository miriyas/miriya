'use client';

import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

import useAuth from '@/hooks/useAuth';
import { postBlogPostAPI } from '@/services/blog';
import { BlogCategory } from '@/types/blog.d';

import LoadingPage from '@/components/Loading/LoadingPage';

const Form = dynamic(() => import('./Form'), {
  ssr: false,
  loading: () => <LoadingPage />,
});

interface Props {
  categories: BlogCategory[];
}

const NewContent = ({ categories }: Props) => {
  const { isAdmin, isLoadingMe } = useAuth();

  if (!isAdmin && !isLoadingMe) notFound();

  return (
    <Suspense fallback={<LoadingPage />}>
      <Form categories={categories} onSubmit={postBlogPostAPI} />
    </Suspense>
  );
};

export default NewContent;
