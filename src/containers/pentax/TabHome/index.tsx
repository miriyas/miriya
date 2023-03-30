'use client';

import Contents from './Contents';
import ReadMe from './ReadMe';
import styles from './TabHome.module.scss';

const PentaxPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.fakeBar} />
      <div className={styles.contentsWrapper}>
        <ReadMe />
        <Contents />
      </div>
      <div className={styles.fakeBar} />
    </section>
  );
};

export default PentaxPage;
