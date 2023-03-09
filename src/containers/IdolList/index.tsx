import Head from 'next/head';

import { IDOLS } from '@/constants';

import Idol from '@/components/Idol';
import styles from './IdolList.module.scss';

const IdolList = () => {
  return (
    <>
      <Head>
        <title>Idols</title>
        <meta name='description' content='Idols preview' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.idolList}>
        <ul>
          {IDOLS.map((idol) => {
            return <Idol key={`${idol.name}-${idol.debutYear}`} idol={idol} />;
          })}
        </ul>
      </main>
    </>
  );
};

export default IdolList;
