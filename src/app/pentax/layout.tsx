import React from 'react';

import Navigation from '@/containers/pentax/_common/Navigation';

import styles from './Pentax.module.scss';

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <main className={styles.pentaxes}>
      <div className={styles.centering}>
        <Navigation />
        {children}
        {/* <TabDSLR />
        <ReadMe /> */}
      </div>
    </main>
  );
};

export default RootLayout;
