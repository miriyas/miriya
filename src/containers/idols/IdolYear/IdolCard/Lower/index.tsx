import { IdolType } from '@/types/idols.d';

import Desc from './Desc';
import styles from './index.module.scss';

interface Props {
  idol: IdolType;
}

const Lower = ({ idol }: Props) => {
  return (
    <div className={styles.lower}>
      <Desc idol={idol} />
    </div>
  );
};

export default Lower;
