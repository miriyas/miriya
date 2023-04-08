'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useMount } from 'react-use';
import Link from 'next/link';

import { MINIHOME_TAB } from '@/types/minihome.d';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { getCommentsCountInTarget } from '@/services/firebase/comments';

import styles from './RightCategory.module.scss';

const INITIAL_COUNT = {
  today: 0,
  total: 0,
};

const RightCategory = () => {
  const [guestbookCount, setGuestbookCount] = useState(INITIAL_COUNT);
  const [idolCount, setIdolCount] = useState(INITIAL_COUNT);
  const [cameraCount, setCemeraCount] = useState(INITIAL_COUNT);
  const [pentaxCount, setPentaxCount] = useState(INITIAL_COUNT);

  useMount(async () => {
    setGuestbookCount(await getCommentsCountInTarget(TARGET_CATEGORY.GUESTBOOK));
    setIdolCount(await getCommentsCountInTarget(TARGET_CATEGORY.IDOLS));
    setCemeraCount(await getCommentsCountInTarget(TARGET_CATEGORY.CAMERA));
    setPentaxCount(await getCommentsCountInTarget(TARGET_CATEGORY.PENTAX));
  });

  return (
    <table className={styles.rightCategory}>
      <tbody>
        <tr>
          <td>
            <Link href={`/minihome/${MINIHOME_TAB.GUESTBOOK.toLowerCase()}`}>
              <p className={styles.category}>방명록</p>
              <p className={styles.count}>
                {guestbookCount.today}/{guestbookCount.total}
                {guestbookCount.today > 0 && (
                  <Image src='/images/minihome/new.png' width={9} height={9} alt='' className={styles.new} />
                )}
              </p>
            </Link>
          </td>
          <td>
            <Link href={`/minihome/${MINIHOME_TAB.IDOLS.toLowerCase()}`}>
              <p className={styles.category}>아이돌</p>
              <p className={styles.count}>
                {idolCount.today}/{idolCount.total}
                {idolCount.today > 0 && (
                  <Image src='/images/minihome/new.png' width={9} height={9} alt='' className={styles.new} />
                )}
              </p>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link href={`/minihome/${MINIHOME_TAB.CAMERA.toLowerCase()}`}>
              <p className={styles.category}>카메라</p>
              <p className={styles.count}>
                {cameraCount.today}/{cameraCount.total}
                {cameraCount.today > 0 && (
                  <Image src='/images/minihome/new.png' width={9} height={9} alt='' className={styles.new} />
                )}
              </p>
            </Link>
          </td>
          <td>
            <Link href={`/minihome/${MINIHOME_TAB.PENTAX.toLowerCase()}`}>
              <p className={styles.category}>펜탁스</p>
              <p className={styles.count}>
                {pentaxCount.today}/{pentaxCount.total}
                {pentaxCount.today > 0 && (
                  <Image src='/images/minihome/new.png' width={9} height={9} alt='' className={styles.new} />
                )}
              </p>
            </Link>
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

export default RightCategory;
