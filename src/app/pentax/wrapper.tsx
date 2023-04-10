'use client';

import React from 'react';
import cx from 'clsx';
import { useSearchParams } from 'next/navigation';

import Navigation from '@/containers/pentax/_common/Navigation';

import styles from './layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  const searchParams = useSearchParams(); // 상위에 반드시 Suspense로 묶지 않으면 위로 타고 올라가며 Next SSR 전부 깨짐.
  const layout = searchParams.get('layout');
  const fullLayout = layout === 'full';

  return (
    <main className={cx(styles.pentaxes, { [styles.full]: fullLayout })}>
      <div className={styles.centering}>
        <Navigation />
        {children}
      </div>
    </main>
  );
};

export default Wrapper;
