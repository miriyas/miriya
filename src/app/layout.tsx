import React, { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';

import { Alert } from '@/components/Alert';
import Providers from './providers';
import Header from './_common/Header';
import Additional from './_common/Additional';
import ToTop from './_common/ToTop';
import Footer from './_common/Footer';
import '@/styles/globals.scss';

export { metadata } from './profile/page';

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
            <ToTop />
          </Suspense>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </Providers>
        <div id='alert' />
        <div id='modal' />
        <Alert />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
