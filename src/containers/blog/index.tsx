'use client';

import dynamic from 'next/dynamic';

import LoadingPage from '@/components/Loading/LoadingPage';

const Content = dynamic(() => import('./Content'), { ssr: false, loading: () => <LoadingPage /> });

const BlogPage = ({ categoryId }: { categoryId?: string }) => <Content categoryId={categoryId} />;

export default BlogPage;
