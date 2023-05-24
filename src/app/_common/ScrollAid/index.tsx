'use client';

import '@/utils/ga';
import { useSearchParams } from 'next/navigation';

import styles from './ScrollAid.module.scss';

const ScrollAid = () => {
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

  const onClickToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.scrollAid}>
      <button type='button' onClick={onClickToTop} className={styles.toTop} />
      <button type='button' onClick={onClickToBottom} className={styles.toBottom} />
    </div>
  );
};

export default ScrollAid;
