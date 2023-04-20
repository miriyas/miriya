import React from 'react';

import type { Metadata } from 'next';

import Wrapper from '@/app/pentax/wrapper';

interface Props {
  children: React.ReactNode;
}

const title = 'Pentaxian Encyclopedia';
const description = '펜탁스 대백과사전';
const url = 'https://miriya.vercel.app/pentax';
const imageUrl = 'https://miriya.vercel.app/images/pentax/og.jpg';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['pentax', 'camera', 'lens', 'limited', 'encyclopedia', 'dslr'],
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

const RootLayout = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default RootLayout;
