'use client';

import { useQuery } from '@tanstack/react-query';

import { getHistories } from '@/services/firebase/histories';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { getTimeDiffText } from '@/utils/date';

import styles from '../common.module.scss';

const Histories = () => {
  const { data: histories = [] } = useQuery(
    ['getHistories', TARGET_CATEGORY.CAMERA, 1000],
    () => getHistories(TARGET_CATEGORY.CAMERA, 1000).then((res) => res),
    {
      suspense: true,
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

  return (
    <>
      <p className={styles.desc}>
        일촌, 단짝친구 공개 폴더입니다 <span>[{histories.length}]</span>
      </p>
      <ul>
        <li className={styles.header}>
          <p className={styles.targetName}>기종</p>
          <p className={styles.body}>내용</p>
          <p className={styles.createdAt}>작성일</p>
        </li>
        {histories.map((history) => {
          return (
            <li key={history.id} title={history.id}>
              <p className={styles.targetName}>{history.targetName}</p>
              <p className={styles.body}>{history.body}</p>
              <time className={styles.createdAt}>{getTimeDiffText(history.createdAt?.seconds, true)}</time>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Histories;
