'use client';

import Link from 'next/link';
import Image from 'next/image';
import cx from 'clsx';
import { Suspense } from 'react';

import useBlog from './useBlog';
import { getTimeDiffText } from '@/utils/date';

import CategoriesBar from './_common/SideBar';
import styles from './index.module.scss';
import Loading from '@/components/Loading';

const BlogPageContent = () => {
  const { posts, categories } = useBlog();

  return (
    <main className={styles.blogPage}>
      <div className={styles.centering}>
        <div className={styles.hero}>
          <Image src='/images/blog/top.jpg' alt='' width={994 * 2} height={368 * 2} />
        </div>
        <Suspense
          fallback={
            <div className={cx(styles.wingWrapper, styles.loading)}>
              <Loading />
            </div>
          }
        >
          <div className={styles.wingWrapper}>
            <div className={styles.postsWing}>
              <ul className={styles.posts}>
                {posts.map((post) => {
                  const categoryName = categories.find((c) => c.id === post.category)?.name ?? '';

                  return (
                    <li key={post.id} className={styles.post}>
                      <Link href={`/blog/${post.id}`}>
                        {post.hero && (
                          <div className={styles.hero}>
                            <Image src={post.hero} fill alt='' />
                          </div>
                        )}
                        <div className={styles.content}>
                          <p className={styles.title}>
                            {post.title}
                            <span>{categoryName}</span>
                            {post.hidden && <span className={styles.hidden}>비공개</span>}
                          </p>
                          <p className={styles.body}>{post.preview.substring(0, 150)}...</p>
                          <time className={styles.time}>{getTimeDiffText(post.createdAt.seconds, true)}</time>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.categoryWing}>
              <CategoriesBar categories={categories} />
            </div>
          </div>
        </Suspense>
      </div>
    </main>
  );
};

export default BlogPageContent;
