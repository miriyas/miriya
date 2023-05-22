'use client';

import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';
import styles from '../common.module.scss';

const Comments = dynamic(() => import('./Comments'), {
  ssr: false,
  loading: () => (
    <div className={styles.listLoading}>
      <Loading />
    </div>
  ),
});

const TabCamera = () => {
  return (
    <div className={styles.commonTab}>
      <p className={styles.menu}>블로그 페이지 댓글 목록</p>
      <div className={styles.commentsWrapper}>
        <Comments />
      </div>
    </div>
  );
};

export default TabCamera;
