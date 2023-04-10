'use client';

import '@/utils/ga';
import { useSearchParams } from 'next/navigation';

import styles from './ToTop.module.scss';

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

const ToTop = () => {
  const searchParams = useSearchParams(); // 상위에 반드시 Suspense로 묶지 않으면 위로 타고 올라가며 Next SSR 전부 깨짐.
  const layout = searchParams.get('layout');
  const fullLayout = layout === 'full';

  if (fullLayout) return null;

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
