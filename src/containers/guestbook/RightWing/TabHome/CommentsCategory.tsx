import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { MouseEventHandler, useState } from 'react';
import { useMount } from 'react-use';

import { GuestbookTabTypes, GUESTBOOK_TAB } from '@/types/guestbook.d';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { tabAtom } from '../../states';
import { getCommentsCountInTarget } from '@/services/comments';

import styles from './CommentsCategory.module.scss';

const INITIAL_COUNT = {
  today: 0,
  total: 0,
};

const CommentsCategory = () => {
  const setTab = useSetAtom(tabAtom);
  const [guestbookCount, setGuestbookCount] = useState(INITIAL_COUNT);
  const [idolCount, setIdolCount] = useState(INITIAL_COUNT);
  const [cameraCount, setCemeraCount] = useState(INITIAL_COUNT);
  const [pentaxCount, setPentaxCount] = useState(INITIAL_COUNT);

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setTab(e.currentTarget.dataset.tab as GuestbookTabTypes);
  };

  useMount(async () => {
    setGuestbookCount(await getCommentsCountInTarget(TARGET_CATEGORY.GUESTBOOK));
    setIdolCount(await getCommentsCountInTarget(TARGET_CATEGORY.IDOLS));
    setCemeraCount(await getCommentsCountInTarget(TARGET_CATEGORY.CAMERA));
    setPentaxCount(await getCommentsCountInTarget(TARGET_CATEGORY.PENTAX));
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
                {idolCount.today}/{idolCount.total}
                {idolCount.today > 0 && (
                  <Image src='/images/guestbook/new.png' width={9} height={9} alt='' className={styles.new} />
                )}
              </p>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button type='button' onClick={onClick} data-tab={GUESTBOOK_TAB.CAMERA}>
              <p className={styles.category}>카메라</p>
              <p className={styles.count}>
                {cameraCount.today}/{cameraCount.total}
                {cameraCount.today > 0 && (
                  <Image src='/images/guestbook/new.png' width={9} height={9} alt='' className={styles.new} />
                )}
              </p>
            </button>
          </td>
          <td>
            <button type='button' onClick={onClick} data-tab={GUESTBOOK_TAB.PENTAX}>
              <p className={styles.category}>펜탁스</p>
              <p className={styles.count}>
                {pentaxCount.today}/{pentaxCount.total}
                {pentaxCount.today > 0 && (
                  <Image src='/images/guestbook/new.png' width={9} height={9} alt='' className={styles.new} />
                )}
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
