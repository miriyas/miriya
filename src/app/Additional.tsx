'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import '@/utils/ga';
import { useGA } from '@/hooks/useGA';

import styles from './App.module.scss';

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

const Additional = () => {
  const { gaPV } = useGA();
  const pathname = usePathname();
  const query = useSearchParams();

  useEffect(() => {
    gaPV(`${pathname}${query}`);
  }, [gaPV, pathname, query]);

  const onClickToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button type='button' onClick={onClickToTop} className={styles.toTop}>
      <p>위로</p>
    </button>
  );
};

export default Additional;
