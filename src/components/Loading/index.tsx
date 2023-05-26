'use client';

import cx from 'clsx';

import styles from './Loading.module.scss';

interface Props {
  small?: boolean;
  test?: boolean;
}

const Loading = ({ small, test }: Props) => {
  return (
    <div className={cx(styles.loading, { [styles.small]: small, [styles.test]: test })}>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
