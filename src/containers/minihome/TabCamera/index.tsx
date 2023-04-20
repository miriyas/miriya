'use client';

import { useQuery } from '@tanstack/react-query';
import cx from 'clsx';
import { ChangeEventHandler, useState } from 'react';

import { getComments } from '@/services/firebase/comments';
import { getHistories } from '@/services/firebase/histories';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { getTimeDiffText } from '@/utils/date';

import Select from '@/components/Select';
import styles from '../common.module.scss';

const TabCamera = () => {
  const [show, setShow] = useState<'comments' | 'histories'>('comments');

  const onChangeFolder: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setShow(e.currentTarget.value as 'comments' | 'histories');
  };

  const { data: comments = [] } = useQuery(
    ['getComments', TARGET_CATEGORY.CAMERA, 1000],
    () => getComments(TARGET_CATEGORY.CAMERA, 1000).then((res) => res),
    {
      suspense: true,
      cacheTime: 6 * 1000,
      refetchOnMount: false,
    },
  );

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
    <div className={styles.commonTab}>
      <p className={styles.menu}>카메라 페이지 댓글 목록</p>
      <div className={styles.commentsWrapper}>
        <div className={styles.selectWrapper}>
          <Select placeholder='폴더' onChange={onChangeFolder} value={show} className={styles.select}>
            <option value='comments'>댓글 목록</option>
            <option value='histories'>수정 내역</option>
          </Select>
        </div>
        <p className={styles.desc}>
          일촌, 단짝친구 공개 폴더입니다 <span>[{comments[0].commentNoInCategory}]</span>
        </p>
        <ul>
          <li className={styles.header}>
            {show === 'comments' && <p className={styles.no} />}
            <p className={styles.targetName}>기종</p>
            <p className={styles.body}>내용</p>
            {show === 'comments' && <p className={styles.name}>작성자</p>}
            <p className={styles.createdAt}>작성일</p>
          </li>
          {show === 'comments' &&
            comments.map((comment) => {
              return (
                <li key={comment.id} title={comment.id}>
                  <p className={styles.no}>{comment.commentNoInCategory}</p>
                  <p className={styles.targetName}>{comment.targetName}</p>
                  <p className={styles.body}>{comment.body}</p>
                  <p className={cx(styles.name, { [styles.isFake]: comment.author.nicknameIsFake })}>
                    {comment.author.nickname}
                  </p>
                  <time className={styles.createdAt}>{getTimeDiffText(comment.createdAt?.seconds, true)}</time>
                </li>
              );
            })}
          {show === 'histories' &&
            histories.map((history) => {
              return (
                <li key={history.id} title={history.id}>
                  <p className={styles.targetName}>{history.targetName}</p>
                  <p className={styles.body}>{history.body}</p>
                  <time className={styles.createdAt}>{getTimeDiffText(history.createdAt?.seconds, true)}</time>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default TabCamera;
