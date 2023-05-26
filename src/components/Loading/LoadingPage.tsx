'use client';

import cx from 'clsx';

import Loading from '.';
import styles from './Loading.module.scss';

interface Props {
  inComponent?: boolean;
  test?: boolean;
}

const LoadingPage = ({ inComponent, test }: Props) => {
  return (
    <div className={cx(styles.loadingPage, { [styles.inComponent]: inComponent, [styles.test]: test })}>
      <Loading />
    </div>
  );
};

export default LoadingPage;
