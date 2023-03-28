import cx from 'clsx';

import { PENTAX_DSLRS, YEAR_INFO } from '@/constants/pentaxes';
import { PentaxDslr } from '@/types/pentaxes';

import styles from './Cameras.module.scss';

// console.log(v.hPentaxYears);

const H_QUARTERS = 22;
const H_LINE = 22;
const W_LINE = 22;
const W_YEAR = W_LINE * 4;

// line: 5,
// startYear: 2003,
// startQuarter: 3,
// endYear: 2006,
// endQuarter: 3,

// startYear: 2006,
// startQuarter: 3,
// endYear: 2009,
// endQuarter: 3,

const getPosition = (dslr: PentaxDslr) => {
  // v.hPentaxYears;
  const { line, startYear, startQuarter, endYear, endQuarter } = dslr;

  let width = 0;
  if (endYear && endQuarter) {
    width = (endYear - startYear) * W_YEAR + (endQuarter - startQuarter + 1) * W_LINE + 1;
  }

  return {
    top: `${H_QUARTERS + H_LINE * (line - 1)}px`,
    left: `${(startYear - YEAR_INFO.start) * W_YEAR + (startQuarter - 1) * W_LINE - 1}px`,
    width: `${width}px`,
    height: `${H_LINE + 1}px`,
  };
};

const Cameras = () => (
  <ul className={styles.cameras}>
    {PENTAX_DSLRS.map((dslr) => {
      return (
        <div key={dslr.name} className={cx(styles.camera, styles[dslr.type.toLowerCase()])} style={getPosition(dslr)}>
          {dslr.name}
        </div>
      );
    })}
  </ul>
);

export default Cameras;
