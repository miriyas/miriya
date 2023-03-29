'use client';

import TabDSLR from './TabDSLR';
import ReadMe from './ReadMe';
import styles from './Pentax.module.scss';

const PentaxPage = () => {
  return (
    <main className={styles.pentaxes}>
      <div className={styles.centering}>
        <TabDSLR />
        <ReadMe />
      </div>
    </main>
  );
};

export default PentaxPage;
