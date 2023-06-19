/* eslint-disable no-underscore-dangle */

'use client';

import { ChangeEventHandler, FormEventHandler, useState } from 'react';

import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';
import { changeBlogCategoryOrderAPI, deleteBlogCategoryAPI, patchBlogCategoryAPI } from '@/services/blog';
import { BlogCategoryForList } from '@/types/blog.d';

import styles from './Item.module.scss';

interface Props {
  category: BlogCategoryForList;
  refetch: () => void;
}

const BlogCategoryPage = ({ category, refetch }: Props) => {
  const { user, isAdmin } = useAuth();
  const { deleteWarningAlert } = useAlert();

  const [nameEdit, setNameEdit] = useState(false);
  const [name, setName] = useState(category.name);

  const onClickName = () => {
    setNameEdit(true);
  };

  const onChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.currentTarget.value);
  };

  const onSubmitName: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    patchBlogCategoryAPI(category.id, {
      name,
    }).then(() => {
      refetch();
      setNameEdit(false);
    });
  };

  const onClickUp = () => {
    changeBlogCategoryOrderAPI(category.id, 'up').then(() => {
      refetch();
    });
  };

  const onClickDown = () => {
    changeBlogCategoryOrderAPI(category.id, 'down').then(() => {
      refetch();
    });
  };

  const onClickDelete = () => {
    if (!user || !isAdmin) return;
    deleteWarningAlert().then(() => deleteBlogCategoryAPI(category.id).then(refetch));
  };

  return (
    <li className={styles.item}>
      {nameEdit ? (
        <form className={styles.nameEdit} onSubmit={onSubmitName}>
          <input type='text' onChange={onChangeName} value={name} />
          <button type='submit'>수정</button>
        </form>
      ) : (
        <button type='button' onClick={onClickName} className={styles.name}>
          {category.name}
          <span>({category._count.blogPosts})</span>
        </button>
      )}
      <div className={styles.controller}>
        <button type='button' onClick={onClickUp}>
          ⬆
        </button>
        <button type='button' onClick={onClickDown}>
          ⬇
        </button>
        <button type='button' onClick={onClickDelete}>
          ✖️
        </button>
      </div>
    </li>
  );
};

export default BlogCategoryPage;
