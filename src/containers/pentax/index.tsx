import { YEAR_INFO } from '@/constants/pentaxes';
import Cameras from '@/containers/pentax/Cameras';
import Grids from '@/containers/pentax/Grids';
import { getNumberArr } from '@/utils';

import styles from './Pentax.module.scss';

const PentaxPage = () => (
  <main className={styles.pentaxes}>
    <div className={styles.centering}>
      <div className={styles.wrapper}>
        <div className={styles.pictureWrapper}>
          <div className={styles.picture}>사진</div>
          <p className={styles.name}>이름</p>
        </div>
        <div className={styles.rightWing}>
          <ol className={styles.years}>
            {getNumberArr(YEAR_INFO.end - YEAR_INFO.start + 1).map((n) => {
              const year = YEAR_INFO.start + n;
              return <li key={year}>{year}</li>;
            })}
          </ol>
          <div className={styles.timeline}>
            <Grids />
            <Cameras />
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <table>
          <tbody>
            <tr>
              <th>ㅇㅇ</th>
              <td>aa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
);

export default PentaxPage;
