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
      <th>Viewfinder</th>
      <td className={styles.dataViewFinder}>
        {prettyOpticsType(viewfinder.type)}&nbsp;
        {magnification}
        {viewfinder.coverage === 100 ? (
          <span className={styles.green}>{viewfinder.coverage}%</span>
        ) : (
          `${viewfinder.coverage}%`
        )}
      </td>
    </tr>
  );
};

export default DataViewFinder;
