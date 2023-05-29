'use client';

import cx from 'clsx';

import styles from './Loading.module.scss';

interface Props {
  small?: boolean;
  test?: boolean;
  className?: string;
}

const Loading = ({ small, test, className }: Props) => {
  return (
    <div className={cx(styles.loading, className, { [styles.small]: small, [styles.test]: test })}>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
