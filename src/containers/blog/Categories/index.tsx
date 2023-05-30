'use client';

import { ChangeEventHandler, FormEventHandler, Suspense, useState } from 'react';
import { notFound, useRouter } from 'next/navigation';

import useAuth from '@/hooks/useAuth';
import { postBlogCategoryAPI } from '@/services/blog';
import { FBBlogCategory } from '@/types/blog';
import { revalidateApi } from '@/services/apiClient';

import Item from './Item';
import styles from './index.module.scss';
import Loading from '@/components/Loading';

interface Props {
  categories: FBBlogCategory[];
}

const BlogCategoryPage = ({ categories }: Props) => {
  const { isAdmin, user, isLoadingMe } = useAuth();
  const router = useRouter();
  const [categoryNew, setCategoryNew] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  const onChangeCategoryNew: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCategoryNew(e.currentTarget.value);
  };

  const refetch = () => {
    revalidateApi('/blog/categories').then(() => {
      router.refresh();
    });
  };

  const onSubmitNewCategory: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!user) return;
    setIsSubmiting(true);

    postBlogCategoryAPI({
      name: categoryNew,
    })
      .then(refetch)
      .finally(() => {
        setCategoryNew('');
        setIsSubmiting(false);
      });
  };

  if (!isAdmin && !isLoadingMe) notFound();

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
              <Item key={category.id} category={category} refetch={refetch} />
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
