import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';

import { Alert } from '@/components/Alert';
import Providers from './providers';
import Header from './_common/Header';
import Additional from './_common/Additional';
import ScrollAid from './_common/ScrollAid';
import '@/styles/globals.scss';
import { metadata as profileMetadata } from './profile/page';

export const metadata = {
  ...profileMetadata,
  title: {
    absolute: 'MIRIYA',
    template: '%s | MIRIYA',
  },
};

const Footer = dynamic(() => import('./_common/Footer'), { ssr: false });

interface Props {
  children: React.ReactNode;
}

// fb:app_id는 Metadata에서 지원하지 않음, others에 넣으면 property가 아니라 name으로 들어감..
const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <head>
        <meta property='fb:app_id' content='1374093376066474' />
      </head>
      <body>
        <Suspense fallback={null}>
          <Additional />
        </Suspense>
        <Providers>
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          {children}
          <Suspense fallback={null}>
            <ScrollAid />
          </Suspense>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <div id='alert' />
          <div id='modal' />
          <Alert />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
