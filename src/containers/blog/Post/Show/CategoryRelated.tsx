'use client';

import Link from 'next/link';
import Image from 'next/image';
import cx from 'clsx';

import { BlogPostForShow } from '@/types/blog.d';
import { getTimeDiffText } from '@/utils/date';
import { imageLoaderDo2Ik } from '@/utils/image';

import styles from './CategoryRelated.module.scss';

interface Props {
  postData: BlogPostForShow;
}
const CategoryRelated = ({ postData }: Props) => {
  const { category } = postData;

  const posts = category.BlogPost;

  if (posts.length === 0) return null;

  return (
    <aside className={styles.categoryRelated}>
      <p className={styles.header}>&apos;{category.name}&apos; 카테고리의 다른 글</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className={cx({ [styles.heroLess]: !post.hero })}>
              <Link href={`/blog/${post.id}`}>
                {post.hero && (
                  <Image
                    src={post.hero}
                    fill
                    alt={post.title}
                    loader={imageLoaderDo2Ik}
                    sizes='(max-width: 240px) 100vw'
                  />
                )}
                <div className={styles.content}>
                  <p>{post.title}</p>
                  <time>({getTimeDiffText(post.createdAt, true)})</time>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default CategoryRelated;
