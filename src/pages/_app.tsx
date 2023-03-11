import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import '@/utils/ga';
import { useGA } from '@/hooks/useGA';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  const { gaPV } = useGA();
  const { pathname, query } = useRouter();

  useEffect(() => {
    gaPV(`${pathname}${query}`);
  }, [gaPV, pathname, query]);

  return <Component {...pageProps} />;
}
