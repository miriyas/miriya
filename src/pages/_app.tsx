import { useEffect } from 'react';
import { useRouter } from 'next/router';

import type { AppProps } from 'next/app';
import '@/utils/ga';
import { useGA } from '@/hooks/useGA';

import '@/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const { gaPV } = useGA();
  const { pathname, query } = useRouter();

  useEffect(() => {
    gaPV(`${pathname}${query}`);
  }, [gaPV, pathname, query]);

  return <Component {...pageProps} />;
};

export default App;
