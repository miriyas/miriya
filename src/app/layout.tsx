import React from 'react';

import type { Metadata } from 'next';

import Header from './common/Header';
import Providers from './providers';
import Additional from './common/Additional';
import ToTop from './common/ToTop';
import Footer from './common/Footer';
import '@/styles/globals.scss';

const title = 'Home';
const description = 'Welcome';

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: 'miriya lee', url: 'https://miriya.vercell.app' }],
  publisher: 'miriya lee',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body>
        <Additional />
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
