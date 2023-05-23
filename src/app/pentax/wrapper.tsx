'use client';

import React from 'react';
import cx from 'clsx';
import { useSearchParams } from 'next/navigation';

import Navigation from '@/containers/pentax/_common/Navigation';

import styles from './layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  const searchParams = useSearchParams(); // 상위에 반드시 Suspense로 묶지 않으면 위로 타고 올라가며 Next SSR 전부 깨짐.
  const layout = searchParams.get('layout');
  const fullLayout = layout === 'full';

  return (
    <main className={cx(styles.pentaxes, { [styles.full]: fullLayout })}>
      <div className={styles.centering}>
        <Navigation />
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
