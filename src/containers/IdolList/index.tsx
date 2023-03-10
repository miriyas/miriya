import Head from 'next/head';
import { groupBy } from 'lodash';

import { IDOLS } from '@/constants';

import IdolYear from '@/components/IdolYear';
import styles from './IdolList.module.scss';

const IdolList = () => {
  const years = groupBy(IDOLS, 'debutYear');

  return (
    <>
      <Head>
        <title>Idols</title>
        <meta name='description' content='Idols preview' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.idolList}>
        <ul className={styles.idolYears}>
          {Object.keys(years).map((year) => {
            // if (typeof window === 'undefined') return <></>;
            return <IdolYear key={year} idols={years[year]} year={Number(year)} />;
          })}
        </ul>
      </main>
    </>
  );
};

export default IdolList;
