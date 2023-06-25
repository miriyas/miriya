'use client';

import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import cx from 'clsx';

import { getRandimString } from '../utils';

import Others from '../../Others';
import { IMAGES } from '../../constants';
import commonStyles from '../../index.module.scss';
import styles from '../sample12.module.scss';

interface Props {
  params: {
    postId: string;
  };
}

const ViewTransitionAPISample12B = async ({ params: { postId } }: Props) => {
  const router = useRouter();

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!document.startViewTransition) {
      router.push('/example/viewtransition/sample12');
      return;
    }

    document.startViewTransition(() => {
      router.push('/example/viewtransition/sample12');
    });
  };

  const imageUrl = IMAGES.find((img) => img.includes(postId)) ?? '';

  return (
    <main className={cx(commonStyles.viewTransitionSample, styles.sample12details)}>
      <h1>예제12 - 상세 페이지</h1>
      <div className={styles.wrapper}>
        <Image src={imageUrl} width={120 * 6} height={63 * 6} alt='' className={styles.hero} />
        <p className={styles.title} suppressHydrationWarning>
          {getRandimString(10, 20)}
        </p>
        <div className={styles.body} suppressHydrationWarning>
          {getRandimString(500, 500)}p
        </div>
      </div>
      <button type='button' onClick={onClick}>
        돌아가기
      </button>
      <Others prev={11} next={13}>
        아주 아주 있을법한 예제
      </Others>
    </main>
  );
};

export default ViewTransitionAPISample12B;
