import Image from 'next/image';

import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileImgWrapper}>
        <Image src='/images/blog/profile.png' width={200} height={250} alt='' />
      </div>
      <div className={styles.nicknameWrapper}>
        <div className={styles.iconWrapper}>
          <Image src='/images/blog/icon.png' width={22} height={22} alt='' className={styles.icon} />
        </div>
        <p className={styles.nickname}>MIRIYA</p>
      </div>
      <p className={styles.ment}>
        입은 닫고,
        <br />
        지갑은 열고
      </p>
    </div>
  );
};

export default Profile;
