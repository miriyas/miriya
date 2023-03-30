'use client';

import Image from 'next/image';

import { VERSION } from '@/constants/pentaxes';

import Navigation from './Navigation';
import Desc from './Desc';
import styles from './Contents.module.scss';

const PentaxPage = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.upper}>
        <Navigation />
        <div className={styles.logoWrapper}>
          <Image src='/images/cameras/makers/logo-pentax.png' alt='' width={150} height={30} />
          <span>★</span>
        </div>
        <h1>Pentaxian Encyclopedia v{VERSION}</h1>
      </div>
      <Desc />
    </div>
  );
};

export default PentaxPage;
