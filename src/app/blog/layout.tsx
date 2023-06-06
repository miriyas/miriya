import { ReactNode } from 'react';

import { getMetaData } from '@/app/sharedMetadata';

export const metadata = getMetaData({
  url: 'https://miriya.net/blog',
  title: "√ MIRiyA's AstraLog",
  description: '미리야의 블로그',
  imageUrl: 'https://miriya.net/images/blog/og.jpg',
  keywords: ['블로그', '미리야', 'miriya'],
});

const Layout = ({ children }: { children: ReactNode }) => children;

export default Layout;
