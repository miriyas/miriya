import React, { Suspense } from 'react';

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
        <div id='modal' />
      </body>
    </html>
  );
};

export default RootLayout;
