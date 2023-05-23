import { ReactNode } from 'react';

import { getMetaData } from '@/app/sharedMetadata';
import styles from './layout.module.scss';

export const metadata = getMetaData({
  url: 'https://miriya.net/mycar',
  title: 'My Car',
  description: '내 차량의 상태와 부품/튜닝 목록, 차계부',
  imageUrl: 'https://miriya.net/images/mycar/og.jpg',
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
