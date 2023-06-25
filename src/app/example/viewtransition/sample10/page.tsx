'use client';

import { MouseEventHandler, useState } from 'react';
import cx from 'clsx';
import Link from 'next/link';

import styles from '../index.module.scss';

const ViewTransitionAPISample10 = () => {
  const [activated, setActivated] = useState(false);

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    document.startViewTransition(() => {
      setActivated((prev) => !prev);
    });
  };

  return (
    <main className={cx(styles.viewTransitionSample, styles.mondrian3)}>
      <h1>예제10</h1>
      <div className={cx(styles.wrapper, { [styles.activated]: activated })}>
        <div className={cx(styles.box1, styles.white)} />
        <div className={cx(styles.box2, styles.white)} />
        <div className={cx(styles.box3, styles.red)} />
        <div className={cx(styles.box4, styles.blue)} />
        <div className={cx(styles.box5, styles.white)} />
        <div className={cx(styles.box6, styles.white)} />
        <div className={cx(styles.box7, styles.yellow)} />
      </div>
      <button type='button' onClick={onClick}>
        작동!
      </button>
      <div className={styles.others}>
        <p>그냥 transition만 쓰면? 매우 이상하죠</p>
        <br />
        <nav>
          <Link href='/example/viewtransition/sample9'>&lt; 이전 예제</Link>
          <Link href='/example/viewtransition/sample11'>다음 예제 &gt;</Link>
        </nav>
      </div>
    </main>
  );
};

export default ViewTransitionAPISample10;
