import dynamic from 'next/dynamic';

import { FBPentaxDslr } from '@/types/pentaxes.d';

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
  dslrs: FBPentaxDslr[];
}

const PentaxDSLRPage = ({ dslrs }: Props) => {
  return <Contents data={dslrs} />;
};

export default PentaxDSLRPage;
