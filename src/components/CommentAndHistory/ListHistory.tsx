import cx from 'clsx';

import { TargetCategoryTypes } from '@/types/comments.d';
import { getTimeDiffText } from '@/utils/date';
import useCommentAndHistory from './useCommentAndHistory';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import liststyles from './List.module.scss';
import styles from './Item/index.module.scss';
import Loading from '@/components/Loading';

interface Props {
  targetCategory: TargetCategoryTypes;
  targetId: string;
}

export const ListHistory = ({ targetCategory, targetId }: Props) => {
  const { histories, isLoadingHistories } = useCommentAndHistory({ targetCategory, targetId });

  if (isLoadingHistories) {
    return (
      <div className={cx(liststyles.list, liststyles.loading)}>
        <Loading small />
      </div>
    );
  }

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
                  src='https://miriya.net/android-chrome-192x192.png'
                  uid='SYSTEM'
                  alt=''
                  size={36}
                />
              </div>
              <p className={cx(styles.name, styles.isFake)}>SYSTEM</p>
            </div>
            <div className={styles.rightWing}>
              <time>{getTimeDiffText(history.createdAt, true)}</time>
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
