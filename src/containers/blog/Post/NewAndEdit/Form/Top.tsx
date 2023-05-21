'use client';

import { ChangeEventHandler } from 'react';
import { notFound } from 'next/navigation';
import { useAtom, useAtomValue } from 'jotai';

import useAuth from '@/hooks/useAuth';
import { FBBlogCategory } from '@/types/blog.d';
import { bodyAtom, categoryAtom, heroAtom, hiddenAtom, loadingAtom, titleAtom } from './states';

import Select from '@/components/Select';
import styles from './Top.module.scss';

interface Props {
  categories: FBBlogCategory[];
  onSubmit: () => void;
}

const BlogEditor = ({ categories, onSubmit }: Props) => {
  const { isAdmin, isLoadingMe, user } = useAuth();
  const [title, setTitle] = useAtom(titleAtom);
  const body = useAtomValue(bodyAtom);
  const [category, setCategory] = useAtom(categoryAtom);
  const [hero, setHero] = useAtom(heroAtom);

  const [hidden, setHidden] = useAtom(hiddenAtom);
  const isLoading = useAtomValue(loadingAtom);

  if (!isAdmin && !isLoadingMe) notFound();

  const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onChangeHero: ChangeEventHandler<HTMLInputElement> = (e) => {
    setHero(e.currentTarget.value);
  };

  const onChangeCategory: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCategory(e.currentTarget.value);
  };

  const onChangeHidden: ChangeEventHandler<HTMLInputElement> = (e) => {
    setHidden(e.currentTarget.checked);
  };

  const submitDisabled = !user || !body || !title || !category;

  return (
    <div className={styles.top}>
      <input type='text' value={title} onChange={onChangeTitle} placeholder='제목' />
      <div className={styles.rightWing}>
        <label>
          <input type='text' onChange={onChangeHero} value={hero} placeholder='대표이미지 URL' />
        </label>
        <label>
          <span>카테고리</span>
          <Select
            placeholder='*카테고리'
            required
            onChange={onChangeCategory}
            value={category}
            className={styles.category}
          >
            <option value='default' disabled>
              나이를 입력하세요
            </option>

            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </Select>
        </label>
        <label className={styles.checkboxWrapper}>
          <input type='checkbox' onChange={onChangeHidden} checked={hidden} />
          <span>비공개</span>
        </label>
        <button type='submit' onClick={onSubmit} disabled={isLoading || submitDisabled}>
          확인
        </button>
      </div>
    </div>
  );
};

export default BlogEditor;
