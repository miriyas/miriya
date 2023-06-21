'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import MyCarPlaceholder from '@/containers/mycar/Placeholder';

const MyCarContent = dynamic(() => import('./Content'), {
  ssr: false,
});

interface Props {
  carId?: string;
}

const MyCarPage = ({ carId }: Props) => {
  return (
    <Suspense fallback={<MyCarPlaceholder />}>
      <MyCarContent carId={carId} />
    </Suspense>
  );
};

export default MyCarPage;
