import { useEffect } from 'react';
import { useRouter } from 'next/router';

import type { AppProps } from 'next/app';
import '@/utils/ga';
import { useGA } from '@/hooks/useGA';

import styles from './App.module.scss';
import '@/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const { gaPV } = useGA();
  const { pathname, query } = useRouter();

  useEffect(() => {
    gaPV(`${pathname}${query}`);
  }, [gaPV, pathname, query]);

  const onClickToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Component {...pageProps} />
      <button type='button' onClick={onClickToTop} className={styles.toTop}>
        <p>위로</p>
      </button>
    </>
  );
};

export default App;
