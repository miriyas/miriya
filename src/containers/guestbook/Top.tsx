import styles from './Top.module.scss';

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.leftWing}>
        TODAY <span>1</span> | TOTAL <span>1234</span>
      </div>
      <div className={styles.rightWing}>
        <p className={styles.title}>준혁e의 ㅁlㄴl홈피✨</p>
        <p className={styles.url}>https://miriya.vercel.app</p>
      </div>
    </div>
  );
};

export default Top;
