import cx from 'clsx';
import { Suspense } from 'react';

import { SubTargetCategoryTypes, TargetCategoryTypes } from '@/types/comments.d';
import { getTimeDiffText } from '@/utils/date';
import useCommentAndHistory from './useCommentAndHistory';

import ProfileImageWithFallback from '@/components/ProfileImageWithFallback';
import liststyles from './List.module.scss';
import styles from './Item.module.scss';
import Loading from '@/components/Loading';

interface Props {
  targetCategory: TargetCategoryTypes;
  targetSubCategory?: SubTargetCategoryTypes;
  targetId: string;
}

export const ListHistoryContent = ({ targetCategory, targetSubCategory, targetId }: Props) => {
  const { histories } = useCommentAndHistory({ targetCategory, targetSubCategory, targetId });

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

export const ListHistory = (props: Props) => (
  <Suspense
    fallback={
      <div className={cx(liststyles.list, liststyles.loading)}>
        <Loading small />
      </div>
    }
  >
    <ListHistoryContent {...props} />
  </Suspense>
);
