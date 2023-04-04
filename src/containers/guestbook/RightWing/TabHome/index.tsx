import Image from 'next/image';
import { Suspense } from 'react';

import { FullCommitData } from '@/types/github.d';

import CommentsRecent from './CommentsRecent';
import CommentsCategory from './CommentsCategory';
import Commits from './Commits';
import rightWingStyles from '../RightWing.module.scss';
import styles from './index.module.scss';
import Loading from '@/components/Loading';

interface Props {
  commitsData: FullCommitData[];
}

const TabHome = ({ commitsData }: Props) => {
  // https://github.com/vercel/next.js/issues/46989 이슈 수정 전 까지 getRecentComments를 CSR로 불러온다..
  return (
    <div className={styles.tabHome}>
      <p className={rightWingStyles.menu}>최근 게시물</p>
      <div className={styles.recents}>
        <Suspense
          fallback={
            <div className={styles.commentsRecentLoading}>
              <Loading small />
            </div>
          }
        >
          <CommentsRecent />
        </Suspense>
        <CommentsCategory />
      </div>
      <p className={rightWingStyles.menu}>미니룸</p>
      <div className={styles.miniRoom}>
        <Image src='/images/guestbook/miniroom.png' fill alt='' className={styles.image} />
      </div>
      <p className={rightWingStyles.menu}>최근 업데이트</p>
      <Commits data={commitsData} />
    </div>
  );
};

export default TabHome;
