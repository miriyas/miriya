import LoadingSpinner from '@/components/Loading';
import styles from './layout.module.scss';

const Loading = () => {
  return (
    <main className={styles.pentaxes}>
      <div className={styles.centering}>
        <LoadingSpinner />
      </div>
    </main>
  );
};

export default Loading;
