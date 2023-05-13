import { ReactNode } from 'react';

import { getMetaData } from '@/app/sharedMetadata';
import Wrapper from '@/app/pentax/wrapper';

export const metadata = getMetaData({
  url: 'https://miriya.vercel.app/pentax',
  title: 'Pentaxian Encyclopedia',
  description: '펜탁스 대백과사전',
  imageUrl: 'https://miriya.vercel.app/images/pentax/og.jpg',
  keywords: ['pentax', 'camera', 'lens', 'limited', 'encyclopedia', 'dslr'],
});

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
