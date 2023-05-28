'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'clsx';

import { getBlogPostsAPI } from '@/services/blog';
import { FBBlogCategory, FBBlogPost } from '@/types/blog.d';
import { getTimeDiffText } from '@/utils/date';
import { imageLoaderDo2Ik } from '@/utils/image';

import styles from './CategoryRelated.module.scss';

interface Props {
  categories: FBBlogCategory[];
  postData: FBBlogPost;
}
const CategoryRelated = ({ categories, postData }: Props) => {
  const categoryName = categories.find((category) => category.id === postData.category)?.name;

  const { data = [] } = useQuery(
    ['getBlogPostsAPI', postData.category],
    () => getBlogPostsAPI(postData.category, 6).then((res) => res.data),
    {
      suspense: true,
    },
  );

  const posts = data.filter((post) => post.id !== postData.id);
  return (
    <aside className={styles.categoryRelated}>
      <p className={styles.header}>&apos;{categoryName}&apos; 카테고리의 다른 글</p>
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
                  <time>({getTimeDiffText(post.createdAt.seconds, true)})</time>
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
