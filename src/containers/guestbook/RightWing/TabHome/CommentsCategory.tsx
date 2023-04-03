import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { MouseEventHandler } from 'react';

import { GuestbookTabTypes, GUESTBOOK_TAB } from '@/types/guestbook.d';
import { tabAtom } from '../../states';

import styles from './CommentsCategory.module.scss';

const CATEGORY_COMMENTS_TEMP = {
  [GUESTBOOK_TAB.GUEST]: {
    count: 12,
    countTotal: 24,
  },
  [GUESTBOOK_TAB.IDOLS]: {
    count: 12,
    countTotal: 24,
  },
  [GUESTBOOK_TAB.DSLR]: {
    count: 12,
    countTotal: 24,
  },
  [GUESTBOOK_TAB.PENTAX]: {
    count: 12,
    countTotal: 24,
  },
};

const CommentsCategory = () => {
  const setTab = useSetAtom(tabAtom);

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setTab(e.currentTarget.dataset.tab as GuestbookTabTypes);
  };

  return (
    <table className={styles.commentsCategory}>
      <tbody>
        <tr>
          <td>
            <button type='button' onClick={onClick} data-tab={GUESTBOOK_TAB.GUEST}>
              <p className={styles.category}>방명록</p>
              <p className={styles.count}>
                {CATEGORY_COMMENTS_TEMP[GUESTBOOK_TAB.GUEST].count}/
                {CATEGORY_COMMENTS_TEMP[GUESTBOOK_TAB.GUEST].countTotal}
                <Image src='/images/guestbook/new.png' width={9} height={9} alt='' className={styles.new} />
              </p>
            </button>
          </td>
          <td>
            <button type='button' onClick={onClick} data-tab={GUESTBOOK_TAB.IDOLS}>
              <p className={styles.category}>Idols</p>
              <p className={styles.count}>
                {CATEGORY_COMMENTS_TEMP[GUESTBOOK_TAB.IDOLS].count}/
                {CATEGORY_COMMENTS_TEMP[GUESTBOOK_TAB.IDOLS].countTotal}
              </p>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button type='button' onClick={onClick} data-tab={GUESTBOOK_TAB.DSLR}>
              <p className={styles.category}>DSLR</p>
              <p className={styles.count}>
                {CATEGORY_COMMENTS_TEMP[GUESTBOOK_TAB.DSLR].count}/
                {CATEGORY_COMMENTS_TEMP[GUESTBOOK_TAB.DSLR].countTotal}
              </p>
            </button>
          </td>
          <td>
            <button type='button' onClick={onClick} data-tab={GUESTBOOK_TAB.PENTAX}>
              <p className={styles.category}>Pentax</p>
              <p className={styles.count}>
                {CATEGORY_COMMENTS_TEMP[GUESTBOOK_TAB.PENTAX].count}/
                {CATEGORY_COMMENTS_TEMP[GUESTBOOK_TAB.PENTAX].countTotal}
              </p>
            </button>
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
  );
};

export default CommentsCategory;
