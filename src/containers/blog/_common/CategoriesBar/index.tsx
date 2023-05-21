import cx from 'clsx';
import Link from 'next/link';
import { Suspense } from 'react';

import { FBBlogCategory } from '@/types/blog.d';

import AdminOnly from '@/components/AdminOnly';
import styles from './index.module.scss';
import Loading from '@/components/Loading';

interface Props {
  categories: FBBlogCategory[];
  currentCategory?: string;
}

const CategoriesBar = ({ categories, currentCategory }: Props) => {
  return (
    <Suspense
      fallback={
        <aside className={styles.categoriesBar}>
          <div className={styles.loading}>
            <Loading />
          </div>
        </aside>
      }
    >
      <aside className={styles.categoriesBar}>
        <div className={styles.wingTitle}>
          <p>카테고리</p>
          <AdminOnly>
            <Link href='blog/categories'>관리</Link>
          </AdminOnly>
        </div>
        <ul className={styles.categories}>
          {categories.map((category) => {
            return (
              <li
                key={category.id}
                className={cx(styles.category, { [styles.active]: category.id === currentCategory })}
              >
                <p className={styles.name}>{category.name}</p>
                <span>({category.postsLength})</span>
              </li>
            );
          })}
        </ul>
      </aside>
    </Suspense>
  );
};

export default CategoriesBar;
