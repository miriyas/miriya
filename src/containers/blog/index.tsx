'use client';

import Link from 'next/link';
import Image from 'next/image';
import cx from 'clsx';
import { Suspense } from 'react';

import { getTimeDiffText } from '@/utils/date';
import { imageLoaderDo2Ik } from '@/utils/image';
import { BlogCategoryForList, BlogPostForList } from '@/types/blog.d';

import CategoriesBar from './_common/SideBar';
import styles from './index.module.scss';
import Loading from '@/components/Loading';

interface Props {
  posts: BlogPostForList[];
  categories: BlogCategoryForList[];
}

const BlogPage = ({ posts, categories }: Props) => {
  return (
    <main className={styles.blogPage}>
      <div className={styles.centering}>
        <div className={styles.hero}>
          <Image src='/images/blog/top.jpg' alt='' width={994 * 2} height={368 * 2} priority />
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
                {posts.map((post) => (
                  <li key={post.id} className={styles.post}>
                    <Link href={`/blog/${post.id}`}>
                      {post.hero && (
                        <div className={styles.hero}>
                          <Image src={post.hero} width={240} height={160} alt='' loader={imageLoaderDo2Ik} />
                        </div>
                      )}
                      <div className={styles.content}>
                        <p className={styles.title}>
                          {post.title}
                          <span>{post.category.name}</span>
                          {post.hidden && <span className={styles.hidden}>비공개</span>}
                        </p>
                        <p className={styles.body}>{post.preview.substring(0, 150)}...</p>
                        <time className={styles.time}>{getTimeDiffText(post.createdAt, true)}</time>
                      </div>
                    </Link>
                  </li>
                ))}
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

export default BlogPage;
