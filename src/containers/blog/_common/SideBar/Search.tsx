'use client';

import { FormEventHandler, useRef } from 'react';
import { useRouter } from 'next/navigation';

import styles from './Search.module.scss';

const Search = () => {
  const router = useRouter();
  const queryRef = useRef<HTMLInputElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (queryRef.current && queryRef.current.value !== '') {
      router.push(`/blog/search?q=${queryRef.current.value}`);
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.search}>
      <input type='text' ref={queryRef} placeholder='검색' />
    </form>
  );
};

export default Search;
