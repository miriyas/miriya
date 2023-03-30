'use client';

import Loading from '.';
import styles from './Loading.module.scss';

const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
      <Loading />
    </div>
  );
};

export default LoadingPage;
