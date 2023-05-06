import { ReactNode } from 'react';

import { generateMetaData } from '@/app/sharedMetadata';
import Wrapper from '@/app/pentax/wrapper';

interface Props {
  children: ReactNode;
}

export const metadata = generateMetaData({
  url: 'https://miriya.vercel.app/pentax',
  title: 'Pentaxian Encyclopedia',
  description: '펜탁스 대백과사전',
  imageUrl: 'https://miriya.vercel.app/images/pentax/og.jpg',
  keywords: ['pentax', 'camera', 'lens', 'limited', 'encyclopedia', 'dslr'],
});

const RootLayout = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default RootLayout;
