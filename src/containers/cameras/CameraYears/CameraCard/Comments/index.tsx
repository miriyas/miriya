'use client';

import { MouseEventHandler, useState } from 'react';
import cx from 'clsx';

import { TARGET_CATEGORY } from '@/types/comments.d';

import { ListComment, ListHistory } from '@/components/CommentAndHistory';
import styles from './index.module.scss';
import CommentForm from '@/components/CommentForm';

interface Props {
  targetId?: string;
  targetName?: string;
}

const Comments = ({ targetId, targetName }: Props) => {
  const [showHistory, setShowHistory] = useState<'comments' | 'history'>('comments');

  if (!targetId || !targetName) return null;

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
      <CommentForm targetCategory={TARGET_CATEGORY.CAMERA} targetId={targetId} targetName={targetName} />
      {showHistory === 'comments' && <ListComment targetCategory={TARGET_CATEGORY.CAMERA} targetId={targetId} />}
      {showHistory === 'history' && <ListHistory targetCategory={TARGET_CATEGORY.CAMERA} targetId={targetId} />}
    </div>
  );
};

export default Comments;
