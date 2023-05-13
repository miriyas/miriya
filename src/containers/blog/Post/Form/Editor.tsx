'use client';

import { ChangeEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { AxiosResponse } from 'axios';

import useAuth from '@/hooks/useAuth';
import { FBBlogCategory, FBBlogPost } from '@/types/blog.d';

import Select from '@/components/Select';
import './form.css';
import styles from './index.module.scss';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

interface Props {
  categories: FBBlogCategory[];
  postData?: FBBlogPost; // 없으면 새글
  onSubmit: (body: Partial<FBBlogPost>, postId?: string) => Promise<AxiosResponse>;
}

const BlogEditor = ({ categories, postData, onSubmit }: Props) => {
  const { user } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState(postData?.title ?? '');
  const [body, setBody] = useState(postData?.body ?? '**Hello world!!!**');
  const [category, setCategory] = useState(postData?.category ?? categories[0].id);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onChangeBody = (v?: string) => {
    setBody(v ?? '');
  };

  const onChangeCategory: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCategory(e.currentTarget.value);
  };

  const submitDisabled = !user || !body || !title || !category;

  const onClickSubmit = () => {
    if (submitDisabled) return;
    setIsLoading(true);

    const preview = document.querySelector('.w-md-editor-preview')?.textContent ?? '';
    onSubmit(
      {
        title,
        body,
        preview: preview.substring(0, 300),
        category,
      },
      postData?.id,
    )
      .then((res) => {
        router.push(`/blog/${res.data.postId}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.newPost}>
      <div className={styles.top}>
        <input type='text' value={title} onChange={onChangeTitle} placeholder='제목' />
        <div className={styles.rightWing}>
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
          <label>
            <span>예약일시</span>
            <input type='datetime-local' />
          </label>
          <button type='submit' onClick={onClickSubmit} disabled={isLoading || submitDisabled}>
            확인
          </button>
        </div>
      </div>
      <MDEditor value={body} onChange={onChangeBody} autoFocus visibleDragbar={false} className={styles.editor} />
    </div>
  );
};

export default BlogEditor;
