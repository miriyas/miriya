'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import { getMinihomRightCounterDataAPI } from '@/services/minihome';
import { RECENT_CATEGORIES } from '@/types/minihome.d';

import styles from './RightCategory.module.scss';

const RightCategory = () => {
  const { data = {} } = useQuery(
    ['getMinihomRightCounterDataAPI'],
    () => {
      return getMinihomRightCounterDataAPI().then((res) => res.data);
    },
    {
      suspense: true,
    },
  );

  return (
    <ul className={styles.rightCategory}>
      {Object.keys(data).map((key) => {
        const count = data[key];
        const href = key === 'M2_POST' ? 'm2day' : key.toLowerCase();
        return (
          <li key={key}>
            <Link href={`/minihome/${href}`}>
              <p className={styles.category}>{RECENT_CATEGORIES[key]}</p>
              <p className={styles.count}>
                {count.today}/{count.total}
                {count.today > 0 && (
                  <Image src='/images/minihome/new.png' width={9} height={9} alt='' className={styles.new} />
                )}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default RightCategory;
