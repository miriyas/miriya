'use client';

import dynamic from 'next/dynamic';

import LoadingPage from '@/components/Loading/LoadingPage';

const EditContent = dynamic(() => import('./EditContent'), {
  ssr: false,
  loading: () => <LoadingPage />,
});

interface Props {
  postId: string;
}

const BlogEditPage = ({ postId }: Props) => <EditContent postId={postId} />;

export default BlogEditPage;
