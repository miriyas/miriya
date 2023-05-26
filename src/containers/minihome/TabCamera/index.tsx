'use client';

import { ChangeEventHandler, useState } from 'react';

import { Comment } from '@/types/comments.d';
import { History } from '@/types/histories.d';

import Select from '@/components/Select';
import Comments from './Comments';
import Histories from './Histories';
import styles from '../common.module.scss';

interface Props {
  comments: Comment[];
  histories: History[];
}

const TabCamera = ({ comments, histories }: Props) => {
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

        {show === 'comments' && <Comments comments={comments} />}
        {show === 'histories' && <Histories histories={histories} />}
      </div>
    </div>
  );
};

export default TabCamera;
