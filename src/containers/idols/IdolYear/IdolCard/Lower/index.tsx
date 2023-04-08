import { useState } from 'react';

import { IdolType } from '@/types/idols.d';

import Desc from './Desc';
import ListHistory from './ListHistory';
import ListComment from './ListComment';
import CommentNewForm from './CommentNewForm';
import styles from './index.module.scss';

interface Props {
  idol: IdolType;
}

const Lower = ({ idol }: Props) => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className={styles.lower}>
      <div className={styles.commentsWrapper}>
        <CommentNewForm idolId={idol.name} />
        <Desc idol={idol} showHistory={showHistory} setShowHistory={setShowHistory} />
        {showHistory ? <ListHistory idol={idol} /> : <ListComment idol={idol} />}
      </div>
    </div>
  );
};

export default Lower;
