import { useRef } from 'react';
import Head from 'next/head';
import { groupBy } from 'lodash';

import { IDOLS } from '@/constants';
import { IIsotopes } from '@/types';

import FilterBar from './FilterBar';
import IdolYear from './IdolYear';
import styles from './IdolList.module.scss';

const IdolList = () => {
  const years = groupBy(IDOLS, 'debutYear');
  const isotopes = useRef<IIsotopes>({});

  return (
    <>
      <Head>
        <title>Idols</title>
        <meta name='description' content='Idols preview' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.idolList}>
        <FilterBar isotopes={isotopes} />
        <dl className={styles.idolYears}>
          {Object.keys(years).map((year) => {
            // if (typeof window === 'undefined') return <></>;
            return <IdolYear key={year} idols={years[year]} year={Number(year)} isotopes={isotopes} />;
          })}
        </dl>
      </main>
    </>
  );
};

export default IdolList;
