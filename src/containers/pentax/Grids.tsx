import { YEAR_INFO } from '@/constants/pentaxes';
import { getNumberArr } from '@/utils';

import styles from './Grids.module.scss';

const Grids = () => (
  <div className={styles.grids}>
    <ul className={styles.quarters}>
      {getNumberArr(YEAR_INFO.end - YEAR_INFO.start + 1).map((n) => {
        const year = YEAR_INFO.start + n;
        return getNumberArr(4).map((i) => {
          return <li key={`${year}-${i + 1}`}>{i + 1}</li>;
        });
      })}
    </ul>
    {getNumberArr(13).map((line) => {
      const key = `line-${line}`;
      return (
        <ul key={key} className={styles.lines}>
          {getNumberArr(YEAR_INFO.end - YEAR_INFO.start + 1).map((n) => {
            const year = YEAR_INFO.start + n;
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
