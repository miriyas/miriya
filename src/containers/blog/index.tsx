'use client';

import Link from 'next/link';
import Image from 'next/image';
import cx from 'clsx';

import useBlog from './useBlog';
import { getTimeDiffText } from '@/utils/date';

import AdminOnly from '@/components/AdminOnly';
import CategoriesBar from './_common/CategoriesBar';
import styles from './index.module.scss';
import Loading from '@/components/Loading';

const BlogPage = () => {
  const { posts, categories, isLoadingPosts, isLoadingCategories } = useBlog();

  return (
    <main className={styles.blogPage}>
      <div className={styles.centering}>
        {isLoadingPosts ? (
          <div className={cx(styles.leftWing, styles.loading)}>
            <Loading />
          </div>
        ) : (
          <div className={styles.leftWing}>
            <ul className={styles.posts}>
              {posts.map((post) => {
                return (
                  <li key={post.id} className={styles.post}>
                    <Link href={`/blog/${post.id}`}>
                      {post.hero && (
                        <div className={styles.hero}>
                          <Image src={post.hero} fill alt='' />
                        </div>
                      )}
                      <div className={styles.content}>
                        <p className={styles.title}>{post.title}</p>
                        {post.hidden && <span className={styles.hidden}>비공개</span>}
                        <p className={styles.body}>{post.preview.substring(0, 150)}...</p>
                        <time className={styles.time}>{getTimeDiffText(post.createdAt.seconds, true)}</time>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className={styles.rightWing}>
          <CategoriesBar categories={categories} isLoading={isLoadingCategories} />
          <AdminOnly>
            <div className={styles.manage}>
              <Link href='blog/post/new'>글쓰기</Link>
            </div>
          </AdminOnly>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
