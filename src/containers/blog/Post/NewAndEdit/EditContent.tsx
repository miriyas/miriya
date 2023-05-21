'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

import useAuth from '@/hooks/useAuth';
import useBlog from '../../useBlog';
import useBlogEdit from './useBlogEdit';
import { patchBlogPostAPI } from '@/services/blog';

import Loading from '@/components/Loading';
import styles from './Form/index.module.scss';

const Form = dynamic(() => import('./Form'), {
  ssr: false,
  loading: () => (
    <div className={styles.listLoading}>
      <Loading />
    </div>
  ),
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
    <Suspense fallback={<Loading />}>
      <Form categories={categories} postData={postData} onSubmit={patchBlogPostAPI} />
    </Suspense>
  );
};

export default EditContent;
