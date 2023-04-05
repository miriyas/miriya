import { IdolType } from '@/types/idols.d';

import CommentList from './CommentList';
import CommentNewForm from './CommentNewForm';
import styles from './index.module.scss';

interface Props {
  idol: IdolType;
}

const Lower = ({ idol }: Props) => {
  return (
    <div className={styles.lower}>
      <div className={styles.commentsWrapper}>
        <CommentNewForm idolId={idol.name} />
        <CommentList idol={idol} />
      </div>
    </div>
  );
};

export default Lower;
