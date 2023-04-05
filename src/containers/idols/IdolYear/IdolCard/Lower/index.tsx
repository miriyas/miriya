import { IdolType } from '@/types/idols.d';

import CommentList from './CommentList';
import CommentForm from './CommentForm';
import styles from './index.module.scss';

interface Props {
  idol: IdolType;
}

const Lower = ({ idol }: Props) => {
  return (
    <div className={styles.lower}>
      <div className={styles.commentsWrapper}>
        <CommentForm idolId={idol.name} />
        <CommentList idol={idol} />
      </div>
    </div>
  );
};

export default Lower;
