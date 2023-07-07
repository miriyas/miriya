'use client';

import { useEffect, useRef } from 'react';

import ViewCode from '@/app/example/ViewCode';
import styles from './index.module.scss';

const MouseCursorSample = () => {
  const hourGlassCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent): void => {
      const cursor = hourGlassCursorRef.current;
      if (!cursor || !e.target) return;

      if (e.target instanceof Element) {
        const { localName } = e.target;
        if (!localName) return;

        if (['a', 'button'].includes(localName)) {
          cursor.style.display = 'none';
        } else {
          cursor.style.display = 'block';
          cursor.style.left = `${e.pageX - 25 / 2}px`;
          cursor.style.top = `${e.pageY - 25 / 2}px`;
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <main className={styles.mouseCursorExample}>
      <h1>애니메이티드 마우스 커서 예제</h1>
      <ViewCode href='https://github.com/miriyas/miriya/blob/main/src/app/example/mousecursor/page.tsx' />
      <div ref={hourGlassCursorRef} className={styles.hourGlassCursor} />
    </main>
  );
};

export default MouseCursorSample;
