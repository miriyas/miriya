import React, { Suspense } from 'react';

import type { Metadata } from 'next';

import Header from './common/Header';
import Providers from './providers';
import Additional from './common/Additional';
import ToTop from './common/ToTop';
import Footer from './common/Footer';
import '@/styles/globals.scss';

const title = 'History of DSLR';
const description = '1998년부터 2011년까지의 DSLR 카메라들';
const url = 'https://miriya.vercel.app/cameras';
const imageUrl = 'https://miriya.vercel.app/images/image-cameras.jpg';

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: 'miriya lee', url: 'https://miriya.vercell.app/cameras' }],
  publisher: 'miriya lee',
  keywords: ['DSLR', 'DSLT', 'MILC', 'camera', 'history', 'interchangable'],
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

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body>
        <Suspense fallback={null}>
          <Additional />
        </Suspense>
        <Providers>
          <Header />
          {children}
          <ToTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
