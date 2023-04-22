'use client';

import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';
import styles from './index.module.scss';

const Content = dynamic(() => import('./Content'), {
  ssr: false,
  loading: () => (
    <div className={styles.loading}>
      <Loading />
    </div>
  ),
});

const TabGuestBook = () => <Content />;

export default TabGuestBook;
