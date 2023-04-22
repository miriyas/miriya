'use client';

import dynamic from 'next/dynamic';

import usePentax from '../usePentax';

import Loading from '@/components/Loading';
import styles from './index.module.scss';

const Contents = dynamic(() => import('./Contents'), {
  loading: () => (
    <section className={styles.wrapper}>
      <Loading />
    </section>
  ),
});

const PentaxSLRPage = () => {
  const { slrs } = usePentax();

  return <Contents data={slrs} />;
};

export default PentaxSLRPage;
