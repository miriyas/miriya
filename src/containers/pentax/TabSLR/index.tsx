'use client';

import { useEffect, useState } from 'react';

import { FBPentaxSlr } from '@/types/pentaxes.d';
import { getPentaxSlrsRealtime } from '@/services/firebase/pentaxes';

import Contents from './Contents';
import Loading from '@/components/Loading';
import styles from './TabSLR.module.scss';

const PentaxSLRPage = () => {
  const [slrs, setSlrs] = useState<FBPentaxSlr[]>([]);

  useEffect(() => {
    const unSubscribe = getPentaxSlrsRealtime(setSlrs);
    return () => unSubscribe();
  }, []);

  if (slrs.length === 0) {
    return (
      <section className={styles.wrapper}>
        <Loading />
      </section>
    );
  }

  return <Contents data={slrs} />;
};

export default PentaxSLRPage;
