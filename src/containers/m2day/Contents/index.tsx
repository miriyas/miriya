'use client';

import Image from 'next/image';
import { groupBy } from 'lodash';
import dayjs from 'dayjs';

import useM2day from '../useM2day';
import useAuth from '@/hooks/useAuth';

import FormNew from './FormNew';
import DateItem from './DateItem';
import Loading from '@/components/Loading';
import styles from './index.module.scss';

const Contents = () => {
  const { isAdmin } = useAuth();
  const { posts, isLoadingPosts } = useM2day();

  const days = groupBy(posts, (year) => dayjs(year.createdAt).format('YYYY-MM-DD'));

  return (
    <div className={styles.contents}>
      <div className={styles.top}>
        <Image className={styles.logo} src='/images/m2day/logo.png' width={200} height={48} alt='' />
      </div>
      {isAdmin && <FormNew />}
      <div className={styles.contentsWrapper}>
        <div className={styles.header}>
          <p className={styles.me}>나는</p>
          <p className={styles.divider}>&gt;</p>
          <p className={styles.all}>모든글</p>
        </div>
        {isLoadingPosts && (
          <div className={styles.loadingWrapper}>
            <Loading />
          </div>
        )}
        <ul className={styles.days}>
          {Object.keys(days).map((day) => {
            return <DateItem key={day} day={day} posts={days[day]} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Contents;
