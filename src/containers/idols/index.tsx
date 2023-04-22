'use client';

import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';

const Content = dynamic(() => import('./Content'), { ssr: false, loading: () => <Loading /> });

const IdolsPageContent = () => {
  return <Content />;
};

export default IdolsPageContent;
