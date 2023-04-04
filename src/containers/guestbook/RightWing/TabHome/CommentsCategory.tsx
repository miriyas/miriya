import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { MouseEventHandler, useState } from 'react';
import { useMount } from 'react-use';

import { GuestbookTabTypes, GUESTBOOK_TAB } from '@/types/guestbook.d';
import { tabAtom } from '../../states';
import { getCommentsCount } from '@/services/guestbook';

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
  [GUESTBOOK_TAB.CAMERA]: {
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
  const [guestbookCount, setGuestbookCount] = useState({
    today: 0,
    total: 0,
  });

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setTab(e.currentTarget.dataset.tab as GuestbookTabTypes);
  };

  useMount(async () => {
    setGuestbookCount(await getCommentsCount());
  });

  return (
    <table className={styles.commentsCategory}>
      <tbody>
        <tr>
          <td>
            <button type='button' onClick={onClick} data-tab={GUESTBOOK_TAB.GUEST}>
              <p className={styles.category}>방명록</p>
              <p className={styles.count}>
                {guestbookCount.today}/{guestbookCount.total}
                {guestbookCount.today > 0 && (
                  <Image src='/images/guestbook/new.png' width={9} height={9} alt='' className={styles.new} />
                )}
              </p>
            </button>
          </td>
          <td>
            <button type='button' onClick={onClick} data-tab={GUESTBOOK_TAB.IDOLS}>
              <p className={styles.category}>아이돌</p>
              <p className={styles.count}>
                {CATEGORY_COMMENTS_TEMP[GUESTBOOK_TAB.IDOLS].count}/
                {CATEGORY_COMMENTS_TEMP[GUESTBOOK_TAB.IDOLS].countTotal}
              </p>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button type='button' onClick={onClick} data-tab={GUESTBOOK_TAB.CAMERA}>
              <p className={styles.category}>카메라</p>
              <p className={styles.count}>
                {CATEGORY_COMMENTS_TEMP[GUESTBOOK_TAB.CAMERA].count}/
                {CATEGORY_COMMENTS_TEMP[GUESTBOOK_TAB.CAMERA].countTotal}
              </p>
            </button>
          </td>
          <td>
            <button type='button' onClick={onClick} data-tab={GUESTBOOK_TAB.PENTAX}>
              <p className={styles.category}>펜탁스</p>
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
