'use client';

import { useEffect, useState } from 'react';

import { PentaxSlr } from '@/types/pentaxes.d';
import { getPentaxSlrsRealtime } from '@/services/firebase/pentaxes';

import Contents from './Contents';
import Loading from '@/components/Loading';
import styles from './TabSLR.module.scss';

const PentaxSLRPage = () => {
  const [slrs, setSlrs] = useState<PentaxSlr[]>([]);

  useEffect(() => {
    const unSubscribeIdols = getPentaxSlrsRealtime(setSlrs);
    return () => unSubscribeIdols();
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
