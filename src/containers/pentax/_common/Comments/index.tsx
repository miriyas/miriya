'use client';

import { MouseEventHandler, useState } from 'react';
import cx from 'clsx';

import { SUB_TARGET_CATEGORY, TARGET_CATEGORY } from '@/types/comments.d';

import { ListComment, ListHistory } from '@/components/CommentAndHistory';
import styles from './index.module.scss';
import CommentForm from '@/components/CommentForm';

interface Props {
  selectedCameraId?: string;
  selectedCameraName?: string;
}

const Comments = ({ selectedCameraId, selectedCameraName }: Props) => {
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
      <CommentForm
        targetCategory={TARGET_CATEGORY.PENTAX}
        targetSubCategory={SUB_TARGET_CATEGORY.SLR}
        targetId={selectedCameraId}
        targetName={selectedCameraName}
      />
      {showHistory === 'comments' && (
        <ListComment
          targetCategory={TARGET_CATEGORY.PENTAX}
          targetSubCategory={SUB_TARGET_CATEGORY.SLR}
          targetId={selectedCameraId}
        />
      )}
      {showHistory === 'history' && (
        <ListHistory
          targetCategory={TARGET_CATEGORY.PENTAX}
          targetSubCategory={SUB_TARGET_CATEGORY.SLR}
          targetId={selectedCameraId}
        />
      )}
    </div>
  );
};

export default Comments;
