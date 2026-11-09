import { ReactNode } from 'react';
import { Metadata } from 'next';

import AutoRefresh from '@/containers/ops/AutoRefresh';
import Nav from '@/containers/ops/Nav';
import { REFRESH_SECONDS } from '@/containers/ops/format';
import styles from '@/containers/ops/index.module.scss';

import { requireAdmin } from './auth';

export const metadata: Metadata = {
  title: 'Ops | MIRIYA',
  robots: { index: false, follow: false },
};

const OpsLayout = async ({ children }: { children: ReactNode }) => {
  await requireAdmin();
  return (
    <main className={styles.ops}>
      <AutoRefresh seconds={REFRESH_SECONDS} />
      <div className={styles.centering}>
        <h1>운영 상태</h1>
        <p className={styles.sub}>{REFRESH_SECONDS}초마다 자동 갱신 · 시각은 한국 시간</p>
        <Nav />
        {children}
      </div>
    </main>
  );
};

export default OpsLayout;
