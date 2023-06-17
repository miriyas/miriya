import React, { Suspense } from 'react';

import { Alert } from '@/components/Alert';
import Providers from './Providers';
import Header from './_common/Header';
import Footer from './_common/Footer';
import GoogleAnalytics from './GoogleAnalytics';
import ScrollAid from './_common/ScrollAid';
import '@/styles/globals.scss';
import { metadata as profileMetadata } from './profile/page';

export const metadata = {
  ...profileMetadata,
  metadataBase: new URL('https://miriya.net/'),
  title: {
    absolute: 'MIRIYA',
    template: '%s | MIRIYA',
  },
};

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
          <GoogleAnalytics />
          <Providers>
            <Header />
            {children}
            <ScrollAid />
            <Footer />
            <div id='alert' />
            <div id='modal' />
            <Alert />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
