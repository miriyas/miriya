'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

import useAuth from '@/hooks/useAuth';
import { patchBlogPostAPI } from '@/services/blog';
import { BlogCategory, BlogPost } from '@/types/blog';

import LoadingPage from '@/components/Loading/LoadingPage';

const Form = dynamic(() => import('./Form'), {
  ssr: false,
  loading: () => <LoadingPage />,
});

interface Props {
  postData: BlogPost;
  categories: BlogCategory[];
}

const EditContent = ({ postData, categories }: Props) => {
  const { isAdmin, isLoadingMe } = useAuth();

  if (!categories) return null;
  if (!isAdmin && !isLoadingMe) notFound();

  return (
    <Suspense fallback={<LoadingPage />}>
      <Form categories={categories} postData={postData} onSubmit={patchBlogPostAPI} />
    </Suspense>
  );
};

export default EditContent;
