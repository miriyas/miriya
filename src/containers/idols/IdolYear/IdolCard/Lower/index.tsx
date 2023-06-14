import { useState } from 'react';

import { Idol } from '@/types/idols.d';
import { TARGET_CATEGORY } from '@/types/comments.d';

import Desc from './Desc';
import { ListHistory, ListComment } from '@/components/CommentAndHistory';
import CommentNewForm from '@/components/CommentForm';
import styles from './index.module.scss';

interface Props {
  idol: Idol;
}

const Lower = ({ idol }: Props) => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className={styles.lower}>
      <CommentNewForm targetCategory={TARGET_CATEGORY.IDOLS} targetId={idol.id} />
      <Desc idol={idol} showHistory={showHistory} setShowHistory={setShowHistory} />
      {showHistory ? (
        <ListHistory targetCategory={TARGET_CATEGORY.IDOLS} targetId={idol.id} />
      ) : (
        <ListComment targetCategory={TARGET_CATEGORY.IDOLS} targetId={idol.id} />
      )}
    </div>
  );
};

export default Lower;
