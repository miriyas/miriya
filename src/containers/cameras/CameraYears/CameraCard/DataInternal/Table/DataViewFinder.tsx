import cx from 'clsx';

import { CameraType } from '@/types/cameras.d';
import { prettyOpticsType } from './utils';

import styles from './Table.module.scss';

interface Props {
  camera: CameraType;
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
