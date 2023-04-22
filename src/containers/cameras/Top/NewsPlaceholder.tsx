'use client';

import cx from 'clsx';

import { getNumberArr } from '@/utils';

import styles from './index.module.scss';

const NewsBarPlaceholder = () => {
  return (
    <ul className={cx(styles.commonBox, styles.news)}>
      {getNumberArr(10).map((newsItem, i) => {
        const key = `news-placeholder-${i}`;
        return <li key={key} className={styles.placeholder} />;
      })}
    </ul>
  );
};

export default NewsBarPlaceholder;
