import React from 'react';
import localFont from 'next/font/local';
import cx from 'clsx';

import type { Metadata } from 'next';
import Top from '@/containers/minihome/_common/Top';
import LeftWing from '@/containers/minihome/_common/LeftWing';
import RightNav from '@/containers/minihome/_common/RightNav';
import { GADataRow } from '@/types/minihome';

import styles from './layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const title = '미니홈피';
const description = '싸이월드 스타일로 재구성한 미니홈피';
const url = 'https://miriya.vercel.app/minihome/home';
const imageUrl = 'https://miriya.vercel.app/images/minihome/og.jpg';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['싸이월드', '미니홈피'],
  openGraph: {
    description,
    type: 'website',
    title,
    url,
    images: [
      {
        type: 'image/jpeg',
        url: imageUrl,
        secureUrl: imageUrl,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl],
  },
};

const dungGeunMoFont = localFont({
  src: './DungGeunMo.woff2',
  variable: '--font-dunggeunmo',
  fallback: ['Spoqa Han Sans Neo', 'sans-serif'],
});

const RootLayout = async ({ children }: Props) => {
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

export default RootLayout;
