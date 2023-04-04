'use client';

import cx from 'clsx';

import styles from './Loading.module.scss';

interface Props {
  small?: boolean;
}

const Loading = ({ small }: Props) => {
  return (
    <div className={cx(styles.loading, { [styles.small]: small })}>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
