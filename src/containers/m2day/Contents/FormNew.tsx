'use client';

import { ChangeEventHandler, FormEventHandler, useState } from 'react';

import useM2day from '../useM2day';
import { postM2dayAPI } from '@/services/m2day';
import { calcContentLength } from '../utils';

import styles from './FormNew.module.scss';

const FormNew = () => {
  const { refetchPosts } = useM2day();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newValue = e.currentTarget.value;
    const length = calcContentLength(newValue);
    if (length > 150) return;
    setContent(newValue);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    postM2dayAPI({
      content,
    }).finally(() => {
      setContent('');
      setLoading(false);
      refetchPosts();
    });
  };

  return (
    <div className={styles.formNew}>
      <div className={styles.top}>
        <div className={styles.leftWing}>
          <p className={styles.location}>지금 내 생각을</p>
          <select className={styles.leftWing}>
            <option>마이미투에</option>
          </select>
        </div>
        <p className={styles.length}>{150 - calcContentLength(content)}</p>
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <textarea value={content} onChange={onChange} />
        <button type='submit' className={styles.submitButton} disabled={loading}>
          올리기
        </button>
      </form>
    </div>
  );
};

export default FormNew;
