import { OPTICS_TYPE, OpticsTypes } from '@/types/cameras.d';

import styles from './Table.module.scss';

export const prettyOpticsType = (type?: OpticsTypes) => {
  if (!type) return null;
  return {
    [OPTICS_TYPE.PENTA_PRISM]: <span className={styles.green}>펜타프리즘</span>,
    [OPTICS_TYPE.PENTA_MIRROR]: <span className={styles.red}>펜타미러</span>,
  }[type];
};
