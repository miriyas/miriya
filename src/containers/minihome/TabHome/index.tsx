import Image from 'next/image';
import { Suspense } from 'react';
import cx from 'clsx';

import { FullCommitData } from '@/types/github.d';

import LeftRecent from './Top/LeftRecent';
import RightCategory from './Top/RightCategory';
import Commits from './Commits';
import commonStyles from '../common.module.scss';
import styles from './index.module.scss';
import Loading from '@/components/Loading';

interface Props {
  commitsData: FullCommitData[];
}

const TabHome = ({ commitsData }: Props) => {
  // https://github.com/vercel/next.js/issues/46989 이슈 수정 전 까지 getRecentComments를 CSR로 불러온다..
  return (
    <div className={cx(commonStyles.commonTab, styles.tabHome)}>
      <p className={commonStyles.menu}>최근 게시물</p>
      <div className={styles.recents}>
        <Suspense
          fallback={
            <div className={styles.commentsRecentLoading}>
              <Loading small />
            </div>
          }
        >
          <LeftRecent />
        </Suspense>
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
