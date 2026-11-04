'use client';

import { useSearchParams } from 'next/navigation';

import styles from './ScrollAid.module.scss';

export const ScrollAidView = ({ fullLayout = false }: { fullLayout?: boolean }) => {

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
    <div className={styles.scrollAid} data-chrome>
      <button type='button' onClick={onClickToTop} className={styles.toTop} aria-label='to top' />
      <button type='button' onClick={onClickToBottom} className={styles.toBottom} aria-label='to bottom' />
    </div>
  );
};

// useSearchParams needs its own <Suspense> in layout.tsx. Its fallback is <ScrollAidView />,
// so the server HTML still has this part and the page does not jump.
const ScrollAid = () => {
  const searchParams = useSearchParams();
  return <ScrollAidView fullLayout={searchParams.get('layout') === 'full'} />;
};

export default ScrollAid;
