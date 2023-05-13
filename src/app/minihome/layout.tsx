import { ReactNode } from 'react';
import localFont from 'next/font/local';
import cx from 'clsx';

import Top from '@/containers/minihome/_common/Top';
import LeftWing from '@/containers/minihome/_common/LeftWing';
import RightNav from '@/containers/minihome/_common/RightNav';
import { GADataRow } from '@/types/minihome';

import { getMetaData } from '@/app/sharedMetadata';
import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
}

export const metadata = getMetaData({
  url: 'https://miriya.vercel.app/minihome/home',
  title: '미니홈피',
  description: '싸이월드 스타일로 재구성한 미니홈피',
  imageUrl: 'https://miriya.vercel.app/images/minihome/og.jpg',
  keywords: ['싸이월드', '미니홈피'],
});

const dungGeunMoFont = localFont({
  src: './DungGeunMo.woff2',
  variable: '--font-dunggeunmo',
  fallback: ['Spoqa Han Sans Neo', 'sans-serif'],
});

const Layout = async ({ children }: Props) => {
  const gaDataRaw = await fetch('https://us-central1-miriyas.cloudfunctions.net/getGAdata', {
    next: { revalidate: 60 * 30 }, // 30분 캐시
  });
  const gaDataRes = await gaDataRaw.json();
  const gaData = gaDataRes.data as GADataRow[];

  const total = gaData[0].metricValues.map((v) => Number(v.value));
  const today = gaData[1].metricValues.map((v) => Number(v.value));

  return (
    <main className={cx(styles.minihome, dungGeunMoFont.variable)}>
      <div className={styles.centering}>
        <div className={styles.outer}>
          <Top
            counterData={{
              total,
              today,
            }}
          />
          <div className={styles.inner}>
            <LeftWing />
            <div className={styles.ring}>
              <div>
                <div />
                <div />
              </div>
              <div>
                <div />
                <div />
              </div>
            </div>
            <section className={styles.rightWing}>{children}</section>
            <RightNav />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
