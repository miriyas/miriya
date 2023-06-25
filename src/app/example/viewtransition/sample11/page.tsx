'use client';

import { MouseEventHandler, useState } from 'react';
import cx from 'clsx';

import Others from '../Others';
import styles from '../index.module.scss';

const ViewTransitionAPISample11 = () => {
  const [activated, setActivated] = useState(false);

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!document.startViewTransition) {
      setActivated((prev) => !prev);
      return;
    }

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
      <Others prev={10} next={12}>
        그냥 간단하게 텍스트도..
      </Others>
    </main>
  );
};

export default ViewTransitionAPISample11;
