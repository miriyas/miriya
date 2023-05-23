'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

import useAuth from '@/hooks/useAuth';
import useBlog from '../../useBlog';
import useBlogEdit from './useBlogEdit';
import { patchBlogPostAPI } from '@/services/blog';

import LoadingPage from '@/components/Loading/LoadingPage';

const Form = dynamic(() => import('./Form'), {
  ssr: false,
  loading: () => <LoadingPage />,
});

interface Props {
  postId: string;
}

const EditContent = ({ postId }: Props) => {
  const { categories } = useBlog();
  const { postData } = useBlogEdit(postId);
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
