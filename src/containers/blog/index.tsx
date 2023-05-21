'use client';

import dynamic from 'next/dynamic';

import LoadingPage from '@/components/Loading/LoadingPage';

const Content = dynamic(() => import('./Content'), { ssr: false, loading: () => <LoadingPage /> });

const BlogPage = () => <Content />;

export default BlogPage;
