'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import { FBBlogCategory } from '@/types/blog.d';

import Loading from '@/components/Loading';
import Profile from './Profile';
import Categories from './Categories';
import styles from './index.module.scss';

const AdminOnly = dynamic(() => import('@/components/AdminOnly'), { ssr: false });

const RecentPosts = dynamic(() => import('./RecentPosts'), {
  ssr: false,
  loading: () => <Loading small />,
});

const RecentComments = dynamic(() => import('./RecentComments'), {
  ssr: false,
  loading: () => <Loading small />,
});

interface Props {
  categories: FBBlogCategory[];
  currentCategory?: string;
}

const SideBar = ({ categories, currentCategory }: Props) => {
  return (
    <Suspense
      fallback={
        <aside className={styles.sideBar}>
          <div className={styles.loading}>
            <Loading />
          </div>
        </aside>
      }
    >
      <aside className={styles.sideBar}>
        <Profile />
        <AdminOnly>
          <div className={styles.admin}>
            <Link href='blog/post/new' className={styles.write}>
              글쓰기
            </Link>
            <Link href='blog/categories' className={styles.manage}>
              관리
            </Link>
          </div>
        </AdminOnly>
        <Categories categories={categories} currentCategory={currentCategory} />
        <RecentPosts />
        <RecentComments />
      </aside>
    </Suspense>
  );
};

export default SideBar;
