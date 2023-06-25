'use client';

import { CSSProperties, MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'clsx';

import { getRandimString } from './utils';

import { IMAGES } from '../constants';
import commonStyles from '../index.module.scss';
import './transition.scss';
import styles from './sample13.module.scss';

const ViewTransitionAPISample13 = () => {
  const router = useRouter();

  const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const { href } = e.currentTarget; // 조심해, startViewTransition 이후로는 이벤트 접근 안돼!

    document.startViewTransition(() => {
      router.push(href);
    });
  };

  return (
    <main className={cx(commonStyles.viewTransitionSample, styles.sample13)}>
      <h1>예제13 - 목록 페이지</h1>
      <ul>
        {IMAGES.map((img) => {
          const postId = img.replace('/images/', '').replace('/og.jpg', '');
          return (
            <li key={img}>
              <Link href={`/example/viewtransition/sample13/${postId}`} onClick={onClick}>
                <div className={styles.thumbnail}>
                  <Image
                    src={img}
                    width={120}
                    height={63}
                    alt=''
                    style={{ viewTransitionName: `transition-sample13-hero-${postId}` } as CSSProperties}
                  />
                </div>
                <div className={styles.contents}>
                  <p
                    className={styles.title}
                    suppressHydrationWarning
                    style={{ viewTransitionName: `transition-sample13-title-${postId}` } as CSSProperties}
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
      <div className={commonStyles.others}>
        <p>아주 아주 있을법한 예제 - 슉 슉 (현재 작동 안됨)</p>
        <br />
        <nav>
          <Link href='/example/viewtransition/sample12'>&lt; 이전 예제</Link>
          {/* <Link href='/example/viewtransition/sample14'>다음 예제 &gt;</Link> */}
        </nav>
      </div>
    </main>
  );
};

export default ViewTransitionAPISample13;
