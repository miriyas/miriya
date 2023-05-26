import cx from 'clsx';

import { getNumberArr } from '@/utils';

import styles from './IdolYear.module.scss';
import cardStyles from './IdolCard/index.module.scss';

if (typeof window !== 'undefined' && !window.isotopes) {
  window.isotopes = {};
}

const IdolYear = () => {
  return (
    <li id='idol-year-1994' className={styles.idolYear}>
      <div className={styles.title} title='1994년에 데뷔한 아이돌 수는 000개'>
        1994
      </div>
      <ul className={cx(styles.idols, styles.placeholder)}>
        {getNumberArr(15).map((idol) => {
          return (
            <li key={`placeholder-${idol}`} className={cardStyles.idolCard}>
              <div />
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default IdolYear;
