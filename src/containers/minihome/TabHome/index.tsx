'use client';

import Image from 'next/image';
import cx from 'clsx';
import dynamic from 'next/dynamic';

import { FullCommitData } from '@/types/github.d';

import Loading from '@/components/Loading';
import Commits from './Commits';
import commonStyles from '../common.module.scss';
import styles from './index.module.scss';

const LeftRecent = dynamic(() => import('./Top/LeftRecent'), {
  ssr: false,
  loading: () => (
    <div className={styles.loading}>
      <Loading small />
    </div>
  ),
});

const RightCategory = dynamic(() => import('./Top/RightCategory'), {
  ssr: false,
  loading: () => (
    <div className={styles.loading}>
      <Loading small />
    </div>
  ),
});

interface Props {
  commitsData: FullCommitData[];
}

const TabHome = ({ commitsData }: Props) => {
  return (
    <div className={cx(commonStyles.commonTab, styles.tabHome)}>
      <p className={commonStyles.menu}>최근 게시물</p>
      <div className={styles.recents}>
        <LeftRecent />
        <RightCategory />
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
