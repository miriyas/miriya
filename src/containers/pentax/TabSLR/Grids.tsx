import { PENTAX_SLRS_YEAR_INFO } from '@/constants/pentaxes';
import { getNumberArr } from '@/utils';

import styles from './Grids.module.scss';

const { start: yearStart, end: yearEnd } = PENTAX_SLRS_YEAR_INFO;

const Grids = () => (
  <div className={styles.grids}>
    {getNumberArr(14).map((line) => {
      const key = `line-${line}`;
      return (
        <ul key={key} className={styles.lines}>
          {getNumberArr(yearEnd - yearStart + 1).map((n) => {
            const year = yearStart + n;
            return getNumberArr(4).map((i) => {
              return <li key={`${year}-${i + 1}`} />;
            });
          })}
        </ul>
      );
    })}
  </div>
);

export default Grids;
