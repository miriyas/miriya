import { useRef } from 'react';
import { NextSeo } from 'next-seo';
import { groupBy } from 'lodash';

import { IDOLS } from '@/constants/idols';
import { IsotopesType } from '@/types/index.d';

import FilterBar from './FilterBar';
import IdolYear from './IdolYear';
import styles from './Idols.module.scss';

const title = 'History of Idols';
const description = '96년부터 2019년까지 활동한 아이돌들';

const Idols = () => {
  const years = groupBy(IDOLS, 'debutYear');
  const isotopes = useRef<IsotopesType>({});

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: 'https://miriya.vercel.app/idols',
          title,
          description,
          images: [
            {
              url: 'https://miriya.vercel.app/images/image-idols.jpg',
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
      <main className={styles.idols}>
        <FilterBar isotopes={isotopes} />
        <ul className={styles.idolYears}>
          {Object.keys(years).map((year) => {
            return <IdolYear key={year} idols={years[year]} year={Number(year)} isotopes={isotopes} />;
          })}
        </ul>
      </main>
    </>
  );
};

export default Idols;
