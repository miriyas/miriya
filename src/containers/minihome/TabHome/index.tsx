'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import cx from 'clsx';

import { FullCommitData } from '@/types/github';
import { Comment } from '@/types/comments';
import { RightCategory as RightCategoryData } from '@/types/minihome';

import Loading from '@/components/Loading';
import Commits from './Commits';
import LeftRecent from './Top/LeftRecent';
import RightCategory from './Top/RightCategory';
import commonStyles from '../common.module.scss';
import styles from './index.module.scss';

const loadingBox = (
  <div className={styles.loading}>
    <Loading small />
  </div>
);

interface Props {
  commitsData: FullCommitData[];
  /** Lists fetched by the server page (rendered in the HTML; the browser refreshes them when old). */
  initial?: { leftComments?: Comment[]; rightCounter?: RightCategoryData; fetchedAt: number };
}

const TabHome = ({ commitsData, initial }: Props) => {
  return (
    <div className={cx(commonStyles.commonTab, styles.tabHome)}>
      <p className={commonStyles.menu}>최근 게시물</p>
      <div className={styles.recents}>
        <Suspense fallback={loadingBox}>
          <LeftRecent initialData={initial?.leftComments} fetchedAt={initial?.fetchedAt} />
        </Suspense>
        <Suspense fallback={loadingBox}>
          <RightCategory initialData={initial?.rightCounter} fetchedAt={initial?.fetchedAt} />
        </Suspense>
      </div>
      <p className={commonStyles.menu}>미니룸</p>
      <div className={styles.miniRoom}>
        <Image src='/images/minihome/miniroom.png' width={426} height={212} alt='' className={styles.image} priority />
      </div>
      <p className={commonStyles.menu}>최근 업데이트</p>
      <Commits data={commitsData} />
    </div>
  );
};

export default TabHome;
