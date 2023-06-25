'use client';

import { CSSProperties, MouseEventHandler, useState } from 'react';
import cx from 'clsx';
import Link from 'next/link';

import styles from '../index.module.scss';

const ViewTransitionAPISample5 = () => {
  const [activated, setActivated] = useState(false);

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    document.startViewTransition(() => {
      setActivated((prev) => !prev);
    });
  };

  return (
    <main className={cx(styles.viewTransitionSample, styles.mondrian)}>
      <h1>예제5</h1>
      <div className={cx(styles.wrapper, { [styles.activated]: activated })}>
        <div style={{ viewTransitionName: 'box1' } as CSSProperties} className={cx(styles.box1, styles.white)} />
        <div style={{ viewTransitionName: 'box2' } as CSSProperties} className={cx(styles.box2, styles.white)} />
        <div style={{ viewTransitionName: 'box3' } as CSSProperties} className={cx(styles.box3, styles.red)} />
        <div style={{ viewTransitionName: 'box4' } as CSSProperties} className={cx(styles.box4, styles.blue)} />
        <div style={{ viewTransitionName: 'box5' } as CSSProperties} className={cx(styles.box5, styles.white)} />
        <div style={{ viewTransitionName: 'box6' } as CSSProperties} className={cx(styles.box6, styles.white)} />
        <div style={{ viewTransitionName: 'box7' } as CSSProperties} className={cx(styles.box7, styles.yellow)} />
      </div>
      <button type='button' onClick={onClick}>
        작동!
      </button>
      <div className={styles.others}>
        <p>여러개 전환 효과 (구림)</p>
        <br />
        <nav>
          <Link href='/example/viewtransition/sample4'>&lt; 이전 예제</Link>
          <Link href='/example/viewtransition/sample6'>다음 예제 &gt;</Link>
        </nav>
      </div>
    </main>
  );
};

export default ViewTransitionAPISample5;
