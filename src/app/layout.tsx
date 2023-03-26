import React, { Suspense } from 'react';

import Header from './common/Header';
import Providers from './providers';
import Additional from './common/Additional';
import ToTop from './common/ToTop';
import Footer from './common/Footer';
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
      </body>
    </html>
  );
};

export default RootLayout;
