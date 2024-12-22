/* eslint-disable react/no-danger */

'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import cx from 'clsx';
import { useWindowSize } from 'react-use';

import styles from './Article.module.scss';

const processTags = (raw: string) => {
  let processed = raw;
  const regex = /(?:__|[*#])|\[(.+?)]\((.+?)\)/g;
  const matchedArray = [...processed.matchAll(regex)];
  matchedArray.forEach((arr) => {
    const original = arr[0];
    const label = arr[1];
    const link = arr[2];
    processed = processed.replace(original, `<a href='${link}' target='_blank' rel='nofollow'>${label}</a>`);
  });

  return processed;
};

interface Props {
  id: string;
  summary: string;
  dev?: string;
  devList?: string[];
}

const HomeArticle = (props: Props) => {
  const { id, summary, dev, devList } = props;

  const detailsRef = useRef<HTMLDetailsElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (!detailsRef.current) return;
    if (width >= 600) detailsRef.current.open = true;
  }, [width]);

  return (
    <li className={cx(styles.page, styles[id])}>
      <article>
        <Link
          className={styles.imageWrapper}
          href={`/${id}`}
          style={{ backgroundImage: `url('/images/${id}/og.jpg')` }}
          aria-label={id}
          title={id}
        />
        <details ref={detailsRef} className={cx({ [styles.noData]: !dev })}>
          <summary>
            <div dangerouslySetInnerHTML={{ __html: processTags(summary) }} />
            <span className={styles.fakeViewMore}>더보기 &gt;</span>
          </summary>
          <div className={styles.devComment}>
            {dev && <div dangerouslySetInnerHTML={{ __html: processTags(dev) }} />}
            {devList && (
              <ul>
                {devList.map((item) => (
                  <li key={item} dangerouslySetInnerHTML={{ __html: processTags(item) }} />
                ))}
              </ul>
            )}
          </div>
        </details>
      </article>
    </li>
  );
};

export default HomeArticle;
