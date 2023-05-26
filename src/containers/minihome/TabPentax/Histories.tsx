'use client';

import { History } from '@/types/histories.d';
import { getTimeDiffText } from '@/utils/date';

import styles from '../common.module.scss';

interface Props {
  histories: History[];
}

const Histories = ({ histories }: Props) => {
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
