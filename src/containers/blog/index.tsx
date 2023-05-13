'use client';

import Link from 'next/link';
import Image from 'next/image';

import useBlog from './useBlog';
import { getTimeDiffText } from '@/utils/date';

import AdminOnly from '@/components/AdminOnly';
import CategoriesBar from './_common/CategoriesBar';
import styles from './index.module.scss';

const BlogPage = () => {
  const { posts, categories } = useBlog();

  return (
    <main className={styles.blogPage}>
      <div className={styles.centering}>
        <div className={styles.leftWing}>
          <div className={styles.wingTitle}>
            <p>글 목록</p>
            <AdminOnly>
              <Link href='blog/post/new'>글쓰기</Link>
            </AdminOnly>
          </div>
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
        <CategoriesBar categories={categories} />
      </div>
    </main>
  );
};

export default BlogPage;
