import { Suspense } from 'react';
import Image from 'next/image';

import { VERSION } from '@/containers/pentax/constants';

import Navigation, { NavigationView } from './Navigation';
import Desc from './Desc';
import styles from './Contents.module.scss';

interface Props {
  desc: string;
}

const PentaxContent = ({ desc }: Props) => {
  return (
    <div className={styles.contents}>
      <div className={styles.upper}>
        <Suspense fallback={<NavigationView query='' />}>
          <Navigation />
        </Suspense>
        <div className={styles.logoWrapper}>
          <Image src='/images/cameras/makers/logo-pentax.png' alt='' width={150} height={30} />
          <span>★</span>
        </div>
        <h1>Pentaxian Encyclopedia v{VERSION}</h1>
      </div>
      <Desc desc={desc} />
    </div>
  );
};

export default PentaxContent;
