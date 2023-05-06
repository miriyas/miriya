import { ReactNode } from 'react';

import { generateMetaData } from '@/app/sharedMetadata';
import styles from './layout.module.scss';

export const metadata = generateMetaData({
  url: 'https://miriya.vercel.app/mycar',
  title: 'My Car',
  description: '내 차량의 상태와 부품/튜닝 목록, 차계부',
  imageUrl: 'https://miriya.vercel.app/images/mycar/og.jpg',
  keywords: ['차계부', '튜닝', '차량', '부품'],
});

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className={styles.mycar}>
      <div className={styles.centering}>{children}</div>
    </main>
  );
};

export default Layout;
