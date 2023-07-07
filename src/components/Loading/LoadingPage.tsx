'use client';

import cx from 'clsx';
import { useEffect, useRef } from 'react';

import Loading from '.';
import styles from './Loading.module.scss';

interface Props {
  inComponent?: boolean;
  test?: boolean;
}

const LoadingPage = ({ inComponent, test }: Props) => {
  const hourGlassCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent): void => {
      const cursor = hourGlassCursorRef.current;
      if (!cursor) return;
      cursor.style.left = `${e.pageX - 25 / 2}px`;
      cursor.style.top = `${e.pageY - 25 / 2}px`;
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className={cx(styles.loadingPage, { [styles.inComponent]: inComponent, [styles.test]: test })}>
      <Loading />
      <div ref={hourGlassCursorRef} className={styles.hourGlassCursor} />
    </div>
  );
};

export default LoadingPage;
