import Image from 'next/image';

import { FullCommitData } from '@/types/github.d';

import CommentsRecent from './CommentsRecent';
import CommentsCategory from './CommentsCategory';
import Commits from './Commits';
import rightWingStyles from '../RightWing.module.scss';
import styles from './index.module.scss';

interface Props {
  commitsData: FullCommitData[];
}

const TabHome = ({ commitsData }: Props) => {
  return (
    <div className={styles.tabHome}>
      <p className={rightWingStyles.menu}>최근 게시물</p>
      <div className={styles.recents}>
        <CommentsRecent />
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
