import { useRef } from 'react';
import { NextSeo } from 'next-seo';
import { groupBy } from 'lodash';

import { IDOLS } from '@/constants';
import { IIsotopes } from '@/types';

import FilterBar from './FilterBar';
import IdolYear from './IdolYear';
import styles from './IdolList.module.scss';

const title = 'History of Idols';
const description = '96년부터 2019년까지 활동한 아이돌들';

const IdolList = () => {
  const years = groupBy(IDOLS, 'debutYear');
  const isotopes = useRef<IIsotopes>({});

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: 'https://idols.vercel.app/',
          title,
          description,
          images: [
            {
              url: 'https://idols.vercel.app/images/image.jpg',
              width: 1200,
              height: 630,
              alt: '',
              type: 'image/jpeg',
            },
          ],
          siteName: title,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <main className={styles.idolList}>
        <FilterBar isotopes={isotopes} />
        <dl className={styles.idolYears}>
          {Object.keys(years).map((year) => {
            return <IdolYear key={year} idols={years[year]} year={Number(year)} isotopes={isotopes} />;
          })}
        </dl>
      </main>
    </>
  );
};

export default IdolList;
