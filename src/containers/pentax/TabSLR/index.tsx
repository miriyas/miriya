import dynamic from 'next/dynamic';

import { PentaxSlr } from '@/types/pentaxes';

import Loading from '@/components/Loading';
import styles from './index.module.scss';

const Contents = dynamic(() => import('./Contents'), {
  loading: () => (
    <section className={styles.wrapper}>
      <Loading />
    </section>
  ),
});

interface Props {
  slrs: PentaxSlr[];
}

const PentaxSLRPage = ({ slrs }: Props) => {
  return <Contents data={slrs} />;
};

export default PentaxSLRPage;
