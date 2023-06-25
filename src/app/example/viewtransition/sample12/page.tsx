'use client';

import { CSSProperties, MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'clsx';

import { getRandimString } from './utils';

import Others from '../Others';
import { IMAGES } from '../constants';
import commonStyles from '../index.module.scss';
import styles from './sample12.module.scss';

const ViewTransitionAPISample12 = () => {
  const router = useRouter();

  const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const { href } = e.currentTarget; // 조심해, startViewTransition 이후로는 이벤트 접근 안돼!

    if (!document.startViewTransition) {
      router.push(href);
      return;
    }

    document.startViewTransition(() => {
      router.push(href);
    });
  };

  return (
    <main className={cx(commonStyles.viewTransitionSample, styles.sample12)}>
      <h1>예제12 - 목록 페이지</h1>
      <ul>
        {IMAGES.map((img) => {
          const postId = img.replace('/images/', '').replace('og.jpg', '');
          return (
            <li key={img}>
              <Link href={`/example/viewtransition/sample12/${postId}`} onClick={onClick}>
                <div className={styles.thumbnail}>
                  <Image
                    src={img}
                    width={120}
                    height={63}
                    alt=''
                    style={{ viewTransitionName: `example-hero-${postId}` } as CSSProperties}
                  />
                </div>
                <div className={styles.contents}>
                  <p
                    className={styles.title}
                    suppressHydrationWarning
                    style={{ viewTransitionName: `example-title-${postId}` } as CSSProperties}
                  >
                    {getRandimString(10, 20)}
                  </p>
                  <p className={styles.summary} suppressHydrationWarning>
                    {getRandimString(20, 200)}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Others prev={11} next={13}>
        아주 아주 있을법한 예제
      </Others>
    </main>
  );
};

export default ViewTransitionAPISample12;
