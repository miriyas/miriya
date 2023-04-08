import { useEffect, useState } from 'react';
import cx from 'clsx';

import { IdolType } from '@/types/idols.d';
import { TARGET_CATEGORY } from '@/types/comments.d';
import { getHistoriesInTargetRealtime } from '@/services/histories';
import { History } from '@/types/histories.d';
import { getTimeDiffText } from '@/utils/date';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import liststyles from './List.module.scss';
import styles from './Item.module.scss';

interface Props {
  idol: IdolType;
}

const ChangeHistory = ({ idol }: Props) => {
  const { name } = idol;
  const [histories, setHistories] = useState<History[]>([]);

  useEffect(() => {
    const unSubscribeComments = getHistoriesInTargetRealtime(TARGET_CATEGORY.IDOLS, name, setHistories);
    return () => unSubscribeComments();
  }, [name]);

  return (
    <ul className={liststyles.list}>
      {histories.map((history) => (
        <li key={history.id} className={styles.item} title={history.id}>
          <div className={styles.upper}>
            <p>{history.body}</p>
          </div>
          <div className={styles.lower}>
            <div className={styles.leftWing}>
              <div className={styles.profileWrapper}>
                <ProfileImageWithFallback
                  src='https://miriya.vercel.app/android-chrome-192x192.png'
                  uid='SYSTEM'
                  alt=''
                  size={18}
                />
              </div>
              <p className={cx(styles.name, styles.isFake)}>SYSTEM</p>
            </div>
            <div className={styles.rightWing}>
              <time>{getTimeDiffText(history.createdAt?.seconds, true)}</time>
            </div>
          </div>
        </li>
      ))}
      {histories.length === 0 && (
        <li className={cx(styles.item, styles.blank)}>
          <div className={styles.upper}>
            아직 수정된 적이 없습니다.
            <br />
            수정을 해보시려면 이준혁에게 메시지를 보내주세요.
          </div>
        </li>
      )}
    </ul>
  );
};

export default ChangeHistory;
