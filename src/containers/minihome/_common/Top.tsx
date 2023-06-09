import { CounterData } from '@/types/minihome';

import styles from './Top.module.scss';

interface Props {
  counterData: CounterData;
}

const Top = ({ counterData }: Props) => {
  const { today, total } = counterData;

  return (
    <div className={styles.top}>
      <div className={styles.leftWing}>
        TODAY <span>{today?.[1] ?? 0}</span> | TOTAL <span>{total?.[1] ?? 0}</span>
      </div>
      <div className={styles.rightWing}>
        <p className={styles.title}>준혁e의 ㅁlㄴl홈피✨</p>
        <p className={styles.url}>https://miriya.net</p>
      </div>
    </div>
  );
};

export default Top;
