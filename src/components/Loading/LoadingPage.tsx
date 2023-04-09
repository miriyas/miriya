'use client';

import cx from 'clsx';

import Loading from '.';
import styles from './Loading.module.scss';

interface Props {
  inComponent?: boolean;
}

const LoadingPage = ({ inComponent }: Props) => {
  return (
    <div className={cx(styles.loadingPage, { [styles.inComponent]: inComponent })}>
      <Loading />
    </div>
  );
};

export default LoadingPage;
