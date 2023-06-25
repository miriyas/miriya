'use client';

import { MouseEventHandler, useState } from 'react';
import cx from 'clsx';

import Others from '../Others';
import styles from '../index.module.scss';

const ViewTransitionAPISample10 = () => {
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
      <Others prev={9} next={11}>
        그냥 transition만 쓰면? 매우 이상하죠
      </Others>
    </main>
  );
};

export default ViewTransitionAPISample10;
