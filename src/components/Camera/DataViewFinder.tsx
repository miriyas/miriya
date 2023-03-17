import { OPTICS_TYPE, OpticsTypes, CameraType } from '@/types/cameras.d';

import styles from './Camera.module.scss';

const prettyOpticsType = (type?: OpticsTypes) => {
  if (!type) return null;
  return {
    [OPTICS_TYPE.PENTA_PRISM]: <span className={styles.green}>펜타프리즘</span>,
    [OPTICS_TYPE.PENTA_MIRROR]: <span className={styles.red}>펜타미러</span>,
  }[type];
};

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
