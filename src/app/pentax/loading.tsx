import cx from 'clsx';

import LoadingSpinner from '@/components/Loading';
import styles from './layout.module.scss';

const Loading = () => {
  return (
    <section className={styles.wrapper}>
      <div className={cx(styles.centering, styles.loading)}>
        <LoadingSpinner />
      </div>
    </section>
  );
};

export default Loading;
