'use client';

import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';
import styles from './Form/index.module.scss';

const NewContent = dynamic(() => import('./NewContent'), {
  ssr: false,
  loading: () => (
    <div className={styles.listLoading}>
      <Loading />
    </div>
  ),
});

const BlogNewPage = () => <NewContent />;

export default BlogNewPage;
