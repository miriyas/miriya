'use client';

import { MouseEventHandler, useState } from 'react';
import cx from 'clsx';
import Link from 'next/link';

import styles from '../index.module.scss';

const ViewTransitionAPISample11 = () => {
  const [activated, setActivated] = useState(false);

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    document.startViewTransition(() => {
      setActivated((prev) => !prev);
    });
  };

  return (
    <main className={cx(styles.viewTransitionSample, styles.text)}>
      <h1>예제11</h1>
      <div className={styles.wrapper}>{!activated ? <p>욕심은 최대로</p> : <p>실현도 최대로</p>}</div>
      <button type='button' onClick={onClick}>
        작동!
      </button>
      <div className={styles.others}>
        <p>그냥 간단하게 텍스트도..</p>
        <br />
        <nav>
          <Link href='/example/viewtransition/sample10'>&lt; 이전 예제</Link>
          <Link href='/example/viewtransition/sample12'>다음 예제 &gt;</Link>
        </nav>
      </div>
    </main>
  );
};

export default ViewTransitionAPISample11;
