'use client';

import { ChangeEventHandler, FormEventHandler, useState } from 'react';

import useM2day from '../useM2day';
import { postM2dayAPI } from '@/services/m2day';
import { calcContentLength } from '../utils';
import { uploadImageForM2API } from '@/services/s3';

import styles from './FormNew.module.scss';

const FormNew = () => {
  const { refetchPosts } = useM2day();
  const [content, setContent] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const onClickExpand = () => {
    setExpanded(true);
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newValue = e.currentTarget.value;
    const length = calcContentLength(newValue);
    if (length > 150) return;
    setContent(newValue);
  };

  const onChangeImage: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const { files } = e.currentTarget;

    if (files && files.length > 0) {
      const images = Array.from(files);

      const previews: string[] = [];
      await Promise.all(
        images.map(async (image) => {
          const formData = new FormData();
          formData.append('image', image);
          const {
            data: { url },
          } = await uploadImageForM2API(formData);
          previews.push(`${process.env.NEXT_PUBLIC_CDN_URL}/${url}`);
        }),
      );
      setImagePreviews((prev) => [...prev, ...previews]);
    } else {
      setImagePreviews([]);
    }
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    postM2dayAPI({
      content,
      images: imagePreviews.join(','),
    }).finally(() => {
      setContent('');
      setImagePreviews([]);
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
        <div className={styles.upper}>
          <textarea value={content} onChange={onChange} onClick={onClickExpand} />
          <button type='submit' className={styles.submitButton} disabled={loading}>
            올리기
          </button>
        </div>
        {expanded && (
          <div className={styles.lower}>
            <input type='file' multiple accept='image/*' className={styles.changeImage} onChange={onChangeImage} />
            <ul className={styles.previews}>
              {imagePreviews.map((preview) => (
                <li key={preview} className={styles.preview} style={{ backgroundImage: `url(${preview})` }} />
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormNew;
