'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import { FBBlogCategory } from '@/types/blog.d';

import { IconRSS } from 'public/svgs';
import ExternalLink from '@/components/ExternalLink';
import Loading from '@/components/Loading';
import Button from '@/components/Button';
import Search from './Search';
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
        <Search />
        <Profile />
        <AdminOnly>
          <div className={styles.admin}>
            <Button link='/blog/post/new' className={styles.write} skin='primary' size='small'>
              글쓰기
            </Button>
            <Button link='/blog/categories' className={styles.manage} skin='ghost' size='small'>
              관리
            </Button>
          </div>
        </AdminOnly>
        <Categories categories={categories} currentCategory={currentCategory} />
        <RecentPosts />
        <RecentComments />
        <ExternalLink href='/api/blog/rss' className={styles.rss}>
          <IconRSS />
          <p>RSS FEED</p>
        </ExternalLink>
      </aside>
    </Suspense>
  );
};

export default SideBar;
