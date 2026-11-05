import React, { Suspense } from 'react';

import Navigation, { NavigationView } from '@/containers/pentax/_common/Navigation';

import styles from './layout.module.scss';

interface Props {
  children: React.ReactNode;
}

// Do not call useSearchParams here: it would turn the whole /pentax tree into client-only
// rendering. ?layout=full is handled by the html.fullLayout class (see app/layout.tsx).
const Wrapper = ({ children }: Props) => {
  return (
    <main className={styles.pentaxes}>
      <div className={styles.centering}>
        <Suspense fallback={<NavigationView query='' />}>
          <Navigation />
        </Suspense>
        {children}
        <div className={styles.share}>
          <p className={styles.title}>공유하기</p>
          <p className={styles.desc}>다음 코드를 복사해서 붙여넣으세요.</p>
          <pre>
            {`<iframe src='https://miriya.net/pentax?layout=full' title='pentaxian encyclopedia' frameborder='0' allow='web-share' allowfullscreen style={{ width: '1200px', height: '834px' }}></iframe>`}
          </pre>
        </div>
      </div>
    </main>
  );
};

export default Wrapper;
