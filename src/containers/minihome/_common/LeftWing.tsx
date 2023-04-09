import Image from 'next/image';

import styles from './LeftWing.module.scss';

const LeftWing = () => {
  return (
    <aside className={styles.leftWing}>
      <div className={styles.wrapper}>
        <div className={styles.upper}>
          <div className={styles.mood}>
            <p>
              TODAY IS.. <Image src='/images/minihome/flower.png' alt='' width={22} height={22} />
            </p>
            <span>행복</span>
          </div>
          <div className={styles.imageWrapper}>
            <Image src='/images/minihome/profile.jpg' width={180} height={135} alt='' className={styles.image} />
          </div>
          <p className={styles.message}>
            Loneley kNight..
            <br />
            <br />
            나는 애송이에 밑바닥부터 기어오르는 도전자라는 사실을 항상 인지하고있어야한다.
          </p>
        </div>
        <div className={styles.lower}>
          <div className={styles.nameWrapper}>
            <p className={styles.name}>이준혁</p>
            <span className={styles.gender}>(♂) 1986. 8. 2 +</span>
          </div>
          <a href='mailto:miriya.lee@gmail.com' className={styles.email}>
            miriya.lee@gmail.com
          </a>
          <div className={styles.surf}>
            파도 탈 친구
            <span>0명</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftWing;
