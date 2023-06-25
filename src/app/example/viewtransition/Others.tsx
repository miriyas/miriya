'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './Others.module.scss';

interface Props {
  children: ReactNode;
  prev?: number;
  next?: number;
}

const Others = ({ children, prev, next }: Props) => {
  return (
    <div className={styles.others}>
      <p>{children}</p>
      <nav>
        {prev && <Link href={`/example/viewtransition/sample${prev}`}>&lt; 이전 예제</Link>}
        {next && <Link href={`/example/viewtransition/sample${next}`}>다음 예제 &gt;</Link>}
      </nav>
    </div>
  );
};

export default Others;
