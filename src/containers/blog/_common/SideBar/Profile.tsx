import Image from 'next/image';
import Link from 'next/link';

import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileImgWrapper}>
        <Image src={`${process.env.NEXT_PUBLIC_CDN_URL}/blog/profile.png`} width={200} height={250} alt='' />
      </div>
      <div className={styles.nicknameWrapper}>
        <div className={styles.iconWrapper}>
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/blog/icon.png`}
            width={22}
            height={22}
            alt=''
            className={styles.icon}
          />
        </div>
        <p className={styles.nickname}>MIRIYA</p>
      </div>
      <p className={styles.ment}>
        입은 닫고, 지갑은 열고.
        <br />
        나는 먼지다, 맨날 코딩하자.
        <br />
      </p>
      <Link href='/blog/bVVTtqMorvSG9HMmTbE0' className={styles.info}>
        블로그 소개
      </Link>
    </div>
  );
};

export default Profile;
