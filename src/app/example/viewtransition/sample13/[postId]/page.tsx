'use client';

import { CSSProperties, MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'clsx';

import { getRandimString } from '../utils';

import { IMAGES } from '../../constants';
import '../transition.scss';
import commonStyles from '../../index.module.scss';
import styles from '../sample13.module.scss';

interface Props {
  params: {
    postId: string;
  };
}

const ViewTransitionAPISample13B = async ({ params: { postId } }: Props) => {
  const router = useRouter();

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    document.startViewTransition(async () => {
      await router.push('/example/viewtransition/sample13');
    });
  };

  const imageUrl = IMAGES.find((img) => img.includes(postId)) ?? '';

  return (
    <main className={cx(commonStyles.viewTransitionSample, styles.sample13details)}>
      <h1>예제13 - 상세 페이지</h1>
      <div className={styles.wrapper}>
        <Image
          src={imageUrl}
          width={120 * 6}
          height={63 * 6}
          alt=''
          className={styles.hero}
          style={{ viewTransitionName: `transition-sample13-hero-${postId}` } as CSSProperties}
        />
        <p
          className={styles.title}
          suppressHydrationWarning
          style={{ viewTransitionName: `transition-sample13-title-${postId}` } as CSSProperties}
        >
          {getRandimString(10, 20)}
        </p>
        <div className={styles.body} suppressHydrationWarning>
          {getRandimString(500, 500)}p
        </div>
      </div>
      <button type='button' onClick={onClick}>
        돌아가기
      </button>
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

export default ViewTransitionAPISample13B;
