/* eslint-disable react/no-danger */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import cx from 'clsx';

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
  priority?: boolean;
}

const HomeArticle = (props: Props) => {
  const { id, summary, dev, devList, priority = false } = props;

  // The dev comment stays closed until the user clicks "더보기".
  return (
    <li className={cx(styles.page, styles[id])}>
      <article>
        {/* next/image: WebP in the right width for the screen, lazy below the first card.
            og.jpg itself stays 1200x630 because it is also the social share image. */}
        <Link className={styles.imageWrapper} href={`/${id}`} aria-label={id} title={id}>
          <Image
            src={`/images/${id}/og.jpg`}
            alt=''
            fill
            sizes='(max-width: 820px) 100vw, 820px'
            priority={priority}
            className={styles.image}
          />
        </Link>
        <details className={cx({ [styles.noData]: !dev })}>
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
