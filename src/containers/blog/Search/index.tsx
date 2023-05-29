'use client';

import BlogSearchContent from '@/containers/blog/Search/Content';
import { FBBlogCategory } from '@/types/blog';

import CategoriesBar from '../_common/SideBar';
import styles from './index.module.scss';

interface Props {
  categories: FBBlogCategory[];
}

const BlogSearchPage = ({ categories }: Props) => {
  return (
    <main className={styles.blogSearchPage}>
      <div className={styles.centering}>
        <div className={styles.wingWrapper}>
          <div className={styles.searchWing}>
            <BlogSearchContent />
          </div>
          <div className={styles.categoryWing}>
            <CategoriesBar categories={categories} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogSearchPage;
