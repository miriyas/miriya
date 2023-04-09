'use client';

import { useEffect, useState } from 'react';

import { PentaxDslr } from '@/types/pentaxes.d';
import { getPentaxDslrsRealtime } from '@/services/firebase/pentaxes';

import Contents from './Contents';
import Loading from '@/components/Loading';
import styles from './TabDSLR.module.scss';

const PentaxDSLRPage = () => {
  const [dslrs, setDslrs] = useState<PentaxDslr[]>([]);

  useEffect(() => {
    const unSubscribePentaxDslrs = getPentaxDslrsRealtime(setDslrs);
    return () => unSubscribePentaxDslrs();
  }, []);

  if (dslrs.length === 0) {
    return (
      <section className={styles.wrapper}>
        <Loading />
      </section>
    );
  }

  return <Contents data={dslrs} />;
};

export default PentaxDSLRPage;
