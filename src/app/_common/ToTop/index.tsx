'use client';

import '@/utils/ga';

import styles from './ToTop.module.scss';

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

const ToTop = () => {
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

export default ToTop;
