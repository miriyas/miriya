'use client';

import localFont from 'next/font/local';
import { useAtom } from 'jotai';
import cx from 'clsx';
import { MouseEventHandler } from 'react';

import { FullCommitData } from '@/types/github.d';
import { CounterData, GUESTBOOK_TAB, GuestbookTabTypes } from '@/types/guestbook.d';
import { tabAtom } from './states';

import Top from './Top';
import LeftWing from './LeftWing';
import RightWing from './RightWing';
import styles from './GuestBook.module.scss';

const dungGeunMoFont = localFont({
  src: './DungGeunMo.woff2',
  variable: '--font-dunggeunmo',
  fallback: ['Spoqa Han Sans Neo', 'sans-serif'],
});

const TABS = [
  {
    key: GUESTBOOK_TAB.HOME,
    label: '홈',
  },
  {
    key: GUESTBOOK_TAB.IDOLS,
    label: '아이돌',
  },
  {
    key: GUESTBOOK_TAB.CAMERA,
    label: '카메라',
  },
  {
    key: GUESTBOOK_TAB.PENTAX,
    label: '펜탁스',
  },
  {
    key: GUESTBOOK_TAB.GUEST,
    label: '방명록',
  },
];

interface Props {
  counterData: CounterData;
  commitsData: FullCommitData[];
}

const GuestBookPage = ({ counterData, commitsData }: Props) => {
  const [tab, setTab] = useAtom(tabAtom);

  const onClickTab: MouseEventHandler<HTMLButtonElement> = (e) => {
    setTab(e.currentTarget.dataset.tab as GuestbookTabTypes);
  };

  return (
    <main className={cx(styles.guestBook, dungGeunMoFont.variable)}>
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
            <RightWing commitsData={commitsData} />
            <nav className={styles.rightNav}>
              <ul>
                {TABS.map((t) => {
                  return (
                    <li key={t.key} className={cx({ [styles.current]: t.key === tab })}>
                      <button type='button' onClick={onClickTab} data-tab={t.key}>
                        {t.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuestBookPage;
