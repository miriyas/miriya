import cx from 'clsx';

import { FBBlogCategory } from '@/types/blog.d';

import styles from './index.module.scss';

interface Props {
  categories: FBBlogCategory[];
  currentCategory?: string;
}

const Categories = ({ categories, currentCategory }: Props) => {
  return (
    <div className={styles.listWrapper}>
      <div className={styles.listTitle}>카테고리</div>
      <ul className={styles.list}>
        {categories.map((category) => {
          return (
            <li
              key={category.id}
              className={cx(styles.listItem, styles.category, {
                [styles.active]: category.id === currentCategory,
              })}
            >
              <p className={styles.name}>{category.name}</p>
              <span>({category.postsLength})</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
