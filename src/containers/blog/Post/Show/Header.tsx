'use client';

/* eslint-disable react/no-danger */

import cx from 'clsx';
import Link from 'next/link';
import Clipboard from 'react-clipboard.js';
import { useRafState, useUnmount } from 'react-use';
import { useMemo } from 'react';

import { FBBlogCategory, FBBlogPost } from '@/types/blog.d';
import { getTimeDiffText } from '@/utils/date';

import AdminOnly from '@/components/AdminOnly';
import styles from './Header.module.scss';

interface Props {
  categories: FBBlogCategory[];
  postData: FBBlogPost;
}

let autoHide: NodeJS.Timeout;

const Header = ({ categories, postData }: Props) => {
  const { id, title, category: categoryId, author, createdAt, hidden } = postData;

  const [copied, setCopied] = useRafState(false);

  const onSuccess = () => {
    setCopied(true);
    autoHide = setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  useUnmount(() => {
    clearTimeout(autoHide);
  });

  const category = useMemo(() => categories.find((c) => c.id === categoryId), [categories, categoryId]);

  const url = `${process.env.NEXT_PUBLIC_LOCAL_FETCH_URL}/blog/${id}`;

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>{title}</h1>
        {category && <Link href={`/blog/categories/${category.id}`}>{category.name}</Link>}
      </div>
      <div className={styles.sub}>
        <div className={styles.leftWing}>
          <span className={styles.author}>{author.nickname}</span>
          <time className={styles.time}>{getTimeDiffText(createdAt.seconds, true)}</time>
          {hidden && <span className={styles.hidden}>비공개</span>}
          <AdminOnly>
            <Link href={`/blog/${id}/edit`}>수정</Link>
          </AdminOnly>
        </div>
        <div className={styles.rightWing}>
          <Clipboard
            data-clipboard-text={url}
            onSuccess={onSuccess}
            className={cx(styles.url, { [styles.copied]: copied })}
          >
            {url}
            <span>복사완료!</span>
          </Clipboard>
        </div>
      </div>
    </header>
  );
};

export default Header;
