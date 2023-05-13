/* eslint-disable react/no-danger */

import Link from 'next/link';

import { FBBlogCategory, FBBlogPost } from '@/types/blog';
import CategoriesBar from '@/containers/blog/_common/CategoriesBar';
import { getTimeDiffText } from '@/utils/date';

import AdminOnly from '@/components/AdminOnly';
import styles from './index.module.scss';

interface Props {
  categories: FBBlogCategory[];
  postData: FBBlogPost;
}

const BlogShowPage = ({ categories, postData }: Props) => {
  const { id, title, category, body, author, createdAt } = postData;

  const categoryName = categories.find((c) => c.id === category)?.name ?? '';

  return (
    <main className={styles.showPost}>
      <div className={styles.centering}>
        <article>
          <header>
            <div className={styles.leftWing}>
              <h1>{title}</h1>
              <span>{categoryName}</span>
            </div>
            <div className={styles.rightWing}>
              <AdminOnly>
                <Link href={`/blog/${id}/edit`}>수정</Link>
              </AdminOnly>
            </div>
          </header>
          <div className={styles.desc}>
            <span className={styles.author}>{author.nickname} ·</span>
            <time className={styles.time}>{getTimeDiffText(createdAt.seconds, true)}</time>
          </div>
          <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
        </article>
        <CategoriesBar categories={categories} currentCategory={category} />
      </div>
    </main>
  );
};

export default BlogShowPage;
