'use client';

import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';
import styles from './Form/index.module.scss';

const EditContent = dynamic(() => import('./EditContent'), {
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

const BlogEditPage = ({ postId }: Props) => <EditContent postId={postId} />;

export default BlogEditPage;
