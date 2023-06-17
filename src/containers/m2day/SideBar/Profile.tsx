import Image from 'next/image';

import { getTimeDiff } from '@/utils/date';
import useAlert from '@/hooks/useAlert';

import styles from './Profile.module.scss';

const Profile = () => {
  const { addAlert } = useAlert();
  const after = getTimeDiff('2007-03-13');

  const onClickFriend = () => {
    addAlert({
      message: '고마워',
    });
  };

  return (
    <div className={styles.profile}>
      <div className={styles.imageWrapper}>
        <Image src='/images/m2day/profile.jpg' width={77} height={77} alt='' />
      </div>
      <div className={styles.nickname}>MIRIYA</div>
      <div className={styles.intro}>
        꼼꼼한게 직업
        <br />
        미투가입 D+{after.day}
      </div>
      <button type='button' className={styles.friend} onClick={onClickFriend}>
        친구신청
      </button>
    </div>
  );
};

export default Profile;
