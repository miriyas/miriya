import Image from 'next/image';
import cx from 'clsx';

import { FullCommitData } from '@/types/github.d';

import Commits from './Commits';
import styles from './RightWing.module.scss';

interface Props {
  commitsData: FullCommitData[];
}

const RightWing = ({ commitsData }: Props) => {
  return (
    <section className={styles.rightWing}>
      <div className={styles.scroll}>
        <p className={styles.menu}>최근 게시물</p>
        <div className={styles.recents}>
          <ul className={styles.list}>
            <li>
              <div className={cx(styles.commentBadge, styles.dslr)}>DSLR</div>
              <p className={styles.commentBody}>캐논이 어쩌고</p>
            </li>
            <li>
              <div className={cx(styles.commentBadge, styles.idols)}>IDOLS</div>
              <p className={styles.commentBody}>비티에스가 어쩌고 저쩌고 그렇고 그렇게fdasf</p>
            </li>
            <li>
              <div className={cx(styles.commentBadge, styles.pentax)}>PENTAX</div>
              <p className={styles.commentBody}>펜탁스가 짱이라능</p>
            </li>
            <li>
              <div className={cx(styles.commentBadge, styles.guestbook)}>GUEST</div>
              <p className={styles.commentBody}>미리야 병신</p>
            </li>
          </ul>
          <table>
            <tbody>
              <tr>
                <td>
                  <p className={styles.category}>방명록</p>
                  <p className={styles.count}>
                    11/24
                    <Image src='/images/guestbook/new.png' width={9} height={9} alt='' className={styles.new} />
                  </p>
                </td>
                <td>
                  <p className={styles.category}>Idols</p>
                  <p className={styles.count}>11</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className={styles.category}>DSLR</p>
                  <p className={styles.count}>11</p>
                </td>
                <td>
                  <p className={styles.category}>Pentax</p>
                  <p className={styles.count}>11</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className={styles.category} />
                  <p className={styles.count} />
                </td>
                <td>
                  <p className={styles.category} />
                  <p className={styles.count} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={styles.menu}>미니룸</p>
        <div className={styles.imageWrapper}>
          <Image src='/images/guestbook/miniroom.png' fill alt='' className={styles.image} />
        </div>
        <p className={styles.menu}>최근 업데이트</p>
        <Commits data={commitsData} />
      </div>
    </section>
  );
};

export default RightWing;
