import cx from 'clsx';

import { OPTICS_TYPE, OpticsTypes, FBCameraType } from '@/types/cameras.d';

import styles from './Table.module.scss';

const prettyOpticsType = (type?: OpticsTypes) => {
  if (!type) return null;
  return {
    [OPTICS_TYPE.PENTA_PRISM]: <span className={styles.green}>펜타프리즘</span>,
    [OPTICS_TYPE.PENTA_MIRROR]: <span className={styles.red}>펜타미러</span>,
  }[type];
};

interface Props {
  camera: FBCameraType;
}

const DataViewFinder = (props: Props) => {
  const { camera } = props;
  const { viewfinder } = camera;

  if (!viewfinder) return null;

  const magnification = viewfinder.magnification
    ? `x${viewfinder.magnification}${viewfinder.coverage ? ' / ' : ''}`
    : '';

  return (
    <tr>
      <th>파인더</th>
      <td className={styles.dataViewFinder}>
        {prettyOpticsType(viewfinder.type)}&nbsp;
        {magnification}
        {viewfinder.coverage !== 0 && (
          <span className={cx({ [styles.green]: viewfinder.coverage === 100 })}>{viewfinder.coverage}%</span>
        )}
      </td>
    </tr>
  );
};

export default DataViewFinder;
