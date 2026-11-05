'use client';

import cx from 'clsx';

import styles from './Loading.module.scss';

interface Props {
  small?: boolean;
  /** Only the text. The full-page loading shows the hourglass cursor instead of the spinner. */
  noSpinner?: boolean;
  test?: boolean;
  className?: string;
}

const Loading = ({ small, noSpinner, test, className }: Props) => {
  return (
    <div className={cx(styles.loading, className, { [styles.small]: small, [styles.noSpinner]: noSpinner, [styles.test]: test })}>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
