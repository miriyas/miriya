'use client';

import { ChangeEventHandler, useState } from 'react';
import dynamic from 'next/dynamic';

import Loading from '@/components/Loading';
import Select from '@/components/Select';
import styles from '../common.module.scss';

const Comments = dynamic(() => import('./Comments'), {
  ssr: false,
  loading: () => (
    <div className={styles.listLoading}>
      <Loading />
    </div>
  ),
});

const Histories = dynamic(() => import('./Histories'), {
  ssr: false,
  loading: () => (
    <div className={styles.listLoading}>
      <Loading />
    </div>
  ),
});

const TabCamera = () => {
  const [show, setShow] = useState<'comments' | 'histories'>('comments');

  const onChangeFolder: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setShow(e.currentTarget.value as 'comments' | 'histories');
  };

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

        {show === 'comments' && <Comments />}
        {show === 'histories' && <Histories />}
      </div>
    </div>
  );
};

export default TabCamera;
