'use client';

import cx from 'clsx';

import { TABS } from '@/containers/mycar/Content';

import Loading from '@/components/Loading';
import TopStyles from './Top.module.scss';
import HeroHeaderStyles from './HeroHeader/index.module.scss';
import styles from './index.module.scss';

const MyCarPlaceholder = () => {
  return (
    <div className={cx(styles.wrapper, styles.loading)}>
      <div className={TopStyles.top}>
        <div className={TopStyles.carSelect} />
      </div>
      <div className={styles.headerWrapper}>
        <div className={cx(HeroHeaderStyles.heroHeader, HeroHeaderStyles.preview)} />
      </div>
      <div className={styles.contents}>
        <div className={styles.tabBar}>
          <ul className={styles.tableSelect}>
            {TABS.map((tb) => (
              <li key={tb.key}>
                <button type='button'>{tb.label}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Loading />
    </div>
  );
};

export default MyCarPlaceholder;
