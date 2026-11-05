import { ReactNode } from 'react';

import { getMetaData } from '@/app/sharedMetadata';
import styles from './layout.module.scss';

export const metadata = getMetaData({
  url: 'https://miriya.net/m2day',
  title: 'miriya님의 엠투데이',
  description: '미투데이 내가 쓸라고 다시 만들어봄',
  imageUrl: 'https://miriya.net/images/m2day/og.jpg',
  keywords: ['미투데이', 'me2day', '마이크로블로그'],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return <main className={styles.m2dayPage}>{children}</main>;
};

export default Layout;
