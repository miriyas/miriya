'use client';

import localFont from 'next/font/local';

import { CounterData } from '@/types/guestbook.d';

import Top from './Top';
import LeftWing from './LeftWing';
import RightWing from './RightWing';
import styles from './GuestBook.module.scss';

const dungGeunMoFont = localFont({ src: './DungGeunMo.woff2', variable: '--font-dunggeunmo' });

interface Props {
  counterData: CounterData;
}

const GuestBookPage = ({ counterData }: Props) => {
  return (
    <main className={styles.guestBook} style={dungGeunMoFont.style}>
      <div className={styles.centering}>
        <div className={styles.outer}>
          <Top counterData={counterData} />
          <div className={styles.inner}>
            <LeftWing />
            <div className={styles.ring}>
              <div>
                <div />
                <div />
              </div>
              <div>
                <div />
                <div />
              </div>
            </div>
            <RightWing />
            <nav className={styles.rightNav}>
              <ul>
                <li>홈</li>
                <li>IDOLS</li>
                <li>DSLR</li>
                <li>PENTAX</li>
                <li>방명록</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuestBookPage;
