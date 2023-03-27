'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Link from 'next/link';
import cx from 'clsx';
import { useWindowSize } from 'react-use';

import styles from './Article.module.scss';

interface Props {
  href: string;
  summary: ReactNode;
  children?: ReactNode;
}

const HomeArticle = (props: Props) => {
  const { href, summary, children } = props;

  const detailsRef = useRef<HTMLDetailsElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (!detailsRef.current) return;
    if (width >= 600) detailsRef.current.open = true;
  }, [width]);

  return (
    <li className={cx(styles.page, styles[href])}>
      <article>
        <Link
          className={styles.imageWrapper}
          href={`/${href}`}
          style={{ backgroundImage: `url('/images/${href}/og.jpg')` }}
        />
        <details ref={detailsRef} className={cx({ [styles.noData]: !children })}>
          <summary>
            {summary}
            <span className={styles.fakeViewMore}>더보기 &gt;</span>
          </summary>
          <p className={styles.devComment}>{children}</p>
        </details>
      </article>
    </li>
  );
};

export default HomeArticle;
