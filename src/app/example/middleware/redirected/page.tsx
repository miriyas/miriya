'use client';

import { useSearchParams } from 'next/navigation';

import styles from './index.module.scss';
import ViewCode from '@/app/example/ViewCode';

const MiddleWareSample = () => {
  const searchParams = useSearchParams();
  const yourCookie = searchParams.get('cookie');

  return (
    <main className={styles.middlewareExample}>
      <h1>미들웨어 리다이렉트 됨</h1>
      <div className={styles.yourCookie}>yourCookie: {yourCookie}</div>
      <ViewCode href='https://github.com/miriyas/miriya/blob/main/src/middleware.ts' />
    </main>
  );
};

export default MiddleWareSample;
