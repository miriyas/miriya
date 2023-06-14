'use client';

import { MouseEventHandler, useState } from 'react';
import cx from 'clsx';

import { ListComment, ListHistory } from '@/components/CommentAndHistory';
import styles from './index.module.scss';
import CommentForm from '@/components/CommentForm';

interface Props {
  selectedCameraId?: string;
  selectedCameraName?: string;
  subCategory: 'DSLR' | 'SLR';
}

const Comments = ({ selectedCameraId, selectedCameraName, subCategory }: Props) => {
  const [showHistory, setShowHistory] = useState<'comments' | 'history'>('comments');

  if (!selectedCameraId || !selectedCameraName) return null;

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setShowHistory(e.currentTarget.dataset.target as 'comments' | 'history');
  };

  return (
    <div className={styles.comments}>
      <nav className={styles.nav}>
        <ul>
          <li className={cx({ [styles.current]: showHistory === 'comments' })}>
            <button type='button' onClick={onClick} data-target='comments'>
              댓글
            </button>
          </li>
          <li className={cx({ [styles.current]: showHistory === 'history' })}>
            <button type='button' onClick={onClick} data-target='history'>
              수정 내역
            </button>
          </li>
        </ul>
      </nav>
      <CommentForm targetCategory={`PENTAX_${subCategory}`} targetId={selectedCameraId} />
      {showHistory === 'comments' && (
        <ListComment targetCategory={`PENTAX_${subCategory}`} targetId={selectedCameraId} />
      )}
      {showHistory === 'history' && (
        <ListHistory targetCategory={`PENTAX_${subCategory}`} targetId={selectedCameraId} />
      )}
    </div>
  );
};

export default Comments;
