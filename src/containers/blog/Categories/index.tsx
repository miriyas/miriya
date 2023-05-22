'use client';

import { ChangeEventHandler, FormEventHandler, Suspense, useState } from 'react';
import { notFound } from 'next/navigation';

import useBlog from '../useBlog';
import useAuth from '@/hooks/useAuth';
import { postBlogCategoryAPI } from '@/services/blog';

import Item from './Item';
import styles from './index.module.scss';
import Loading from '@/components/Loading';

const BlogCategoryPage = () => {
  const { isAdmin, user } = useAuth();
  const [categoryNew, setCategoryNew] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  const { categories, refetchCategories } = useBlog();

  const onChangeCategoryNew: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCategoryNew(e.currentTarget.value);
  };

  const onSubmitNewCategory: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) return;
    setIsSubmiting(true);

    postBlogCategoryAPI({
      name: categoryNew,
    })
      .then(() => {
        refetchCategories();
      })
      .finally(() => {
        setCategoryNew('');
        setIsSubmiting(false);
      });
  };

  if (!isAdmin) notFound();

  return (
    <div className={styles.categoriesPage}>
      <div className={styles.centering}>
        <p className={styles.title}>카테고리 관리</p>
        <Suspense
          fallback={
            <ul className={styles.categories}>
              <li className={styles.loading}>
                <Loading small />
              </li>
            </ul>
          }
        >
          <ul className={styles.categories}>
            {categories.map((category) => (
              <Item key={category.id} category={category} refetch={refetchCategories} />
            ))}
          </ul>
        </Suspense>
        <form className={styles.new} onSubmit={onSubmitNewCategory}>
          <input type='text' value={categoryNew} onChange={onChangeCategoryNew} placeholder='카테고리명' />
          <button type='submit' disabled={isSubmiting}>
            추가
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogCategoryPage;
