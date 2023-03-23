import React from 'react';

import Providers from './providers';
import Additional from './Additional';
import '@/styles/globals.scss';

const title = 'Home';
const description = 'Welcome';

export const metadata = {
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
