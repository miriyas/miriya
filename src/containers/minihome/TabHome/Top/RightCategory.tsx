'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useQueries, UseQueryResult } from '@tanstack/react-query';

import { RECENT_CATEGORIES } from '@/types/minihome.d';
import { getCommentsCountInTarget } from '@/services/firebase/comments';

import styles from './RightCategory.module.scss';

interface CounterData {
  today: number;
  total: number;
}

const INITIAL_COUNT: CounterData = {
  today: 0,
  total: 0,
};

const RightCategory = () => {
  const keys = Object.keys(RECENT_CATEGORIES) as Array<keyof typeof RECENT_CATEGORIES>;
  const data = useQueries<UseQueryResult<CounterData, unknown>[]>({
    queries: keys.map((tc) => ({
      queryKey: ['getCommentsCountInTarget', tc],
      queryFn: () => getCommentsCountInTarget(tc),
      placeholderData: INITIAL_COUNT,
    })),
  });

  return (
    <ul className={styles.rightCategory}>
      {keys.map((key, i) => {
        const count = data[i].data as CounterData;
        return (
          <li key={key}>
            <Link href={`/minihome/${key.toLowerCase()}`}>
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
      <li>
        <p className={styles.category} />
        <p className={styles.count} />
      </li>
      <li>
        <p className={styles.category} />
        <p className={styles.count} />
      </li>
    </ul>
  );
};

export default RightCategory;
